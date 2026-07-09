import { render } from '@testing-library/react';
import GenderIcon from './GenderIcon';

jest.mock('../Icon/Icon', () => ({
  Icon: ({ id }: { id: string }) => <svg data-testid={id} />,
}));

describe('GenderIcon', () => {
  test('renders icon-male and applies male modifier class for MALE', () => {
    const { container, getByTestId } = render(<GenderIcon gender="MALE" />);

    expect(getByTestId('icon-male')).toBeInTheDocument();
    expect(container.querySelector('.gender-icon--male')).toBeInTheDocument();
    expect(container.querySelector('.gender-icon--female')).not.toBeInTheDocument();
  });

  test('renders icon-female and applies female modifier class for FEMALE', () => {
    const { container, getByTestId } = render(<GenderIcon gender="FEMALE" />);

    expect(getByTestId('icon-female')).toBeInTheDocument();
    expect(container.querySelector('.gender-icon--female')).toBeInTheDocument();
    expect(container.querySelector('.gender-icon--male')).not.toBeInTheDocument();
  });
});
