import { render, screen } from '@testing-library/react';
import PetDetailCard from './PetDetailCard';
import { Pet } from '../../types/pet';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'uk', changeLanguage: jest.fn() },
  }),
}));

jest.mock('../PetGallery/PetGallery', () => ({
  __esModule: true,
  default: ({ images, altText }: { images: string[]; altText: string }) => (
    <div data-testid="pet-gallery" data-images-count={images.length} data-alt={altText} />
  ),
}));

jest.mock('../GenderIcon/GenderIcon', () => ({
  __esModule: true,
  default: ({ gender }: { gender: string }) => (
    <div data-testid="gender-icon" data-gender={gender} />
  ),
}));

const buildPet = (overrides: Partial<Pet> = {}): Pet => ({
  id: 1,
  name: 'Тайсон',
  species: 'DOG',
  gender: 'MALE',
  age: 24,
  size: 'LARGE',
  photos: ['p1.jpg', 'p2.jpg', 'p3.jpg'],
  vaccinated: true,
  spayedNeutered: false,
  treatedForParasites: true,
  description: 'A friendly large dog.',
  breed: 'Mixed',
  status: 'AVAILABLE',
  shelter: { id: 10, name: 'Test Shelter', location: 'Київ' },
  dateOfArrival: '2026-01-15',
  ...overrides,
});

describe('PetDetailCard', () => {
  test('renders pet name as heading', () => {
    render(<PetDetailCard pet={buildPet()} />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Тайсон' })
    ).toBeInTheDocument();
  });

  test('passes pet photos and name to PetGallery', () => {
    render(<PetDetailCard pet={buildPet()} />);

    const gallery = screen.getByTestId('pet-gallery');
    expect(gallery).toHaveAttribute('data-images-count', '3');
    expect(gallery).toHaveAttribute('data-alt', 'Тайсон');
  });

  test('passes pet gender to GenderIcon', () => {
    render(<PetDetailCard pet={buildPet({ gender: 'FEMALE' })} />);

    expect(screen.getByTestId('gender-icon')).toHaveAttribute(
      'data-gender',
      'FEMALE'
    );
  });

  test('renders shelter location and name', () => {
    render(<PetDetailCard pet={buildPet()} />);

    expect(screen.getByText('Київ')).toBeInTheDocument();
    expect(screen.getByText('Test Shelter')).toBeInTheDocument();
  });

  test('renders description text', () => {
    render(<PetDetailCard pet={buildPet()} />);

    expect(screen.getByText('A friendly large dog.')).toBeInTheDocument();
  });

  test('renders health flags as yes/no using common keys', () => {
    render(
      <PetDetailCard
        pet={buildPet({
          vaccinated: true,
          spayedNeutered: false,
          treatedForParasites: true,
        })}
      />
    );

    // mocked t returns key, common.yes / common.no
    const yesValues = screen.getAllByText('common.yes');
    const noValues = screen.getAllByText('common.no');
    expect(yesValues).toHaveLength(2); // vaccinated + parasites
    expect(noValues).toHaveLength(1); // spayedNeutered
  });

  test('renders both action buttons', () => {
    render(<PetDetailCard pet={buildPet()} />);

    expect(
      screen.getByRole('button', { name: 'petDetail.adopt' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'petDetail.contactShelter' })
    ).toBeInTheDocument();
  });
});
