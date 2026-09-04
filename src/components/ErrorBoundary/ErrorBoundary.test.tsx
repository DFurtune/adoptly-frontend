import { lazy, Suspense } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const ThrowingComponent = () => {
  throw new Error('Sync test error');
};

describe('ErrorBoundary', () => {
  // React logs errors caught by boundaries to console.error.
  // Suppress that noise so it does not clutter test output.
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('renders children when no error occurs', () => {
    render(
      <ErrorBoundary fallback={<div>Fallback</div>}>
        <div>Child content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Child content')).toBeInTheDocument();
    expect(screen.queryByText('Fallback')).not.toBeInTheDocument();
  });

  test('renders fallback when a child throws synchronously', () => {
    render(
      <ErrorBoundary fallback={<div>Fallback</div>}>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Fallback')).toBeInTheDocument();
    expect(screen.queryByText('Child content')).not.toBeInTheDocument();
  });

  test('renders fallback when a lazy import rejects', async () => {
    const FailingLazyComponent = lazy(() =>
      Promise.reject(new Error('Chunk load failed'))
    );

    render(
      <ErrorBoundary fallback={<div>Recovery UI</div>}>
        <Suspense fallback={<div>Loading</div>}>
          <FailingLazyComponent />
        </Suspense>
      </ErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText('Recovery UI')).toBeInTheDocument();
    });
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  });
});
