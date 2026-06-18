import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PetDetailPage from './PetDetailPage';
import { getPetById } from '../../services/pets';
import { Pet } from '../../types/pet';

jest.mock('../../services/pets', () => ({
  getPetById: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'uk', changeLanguage: jest.fn() },
  }),
}));

jest.mock('../../components/PetDetailCard/PetDetailCard', () => ({
  __esModule: true,
  default: ({ pet }: { pet: Pet }) => (
    <div data-testid="pet-detail-card" data-pet-id={pet.id} data-pet-name={pet.name} />
  ),
}));

const mockGetPetById = getPetById as jest.MockedFunction<typeof getPetById>;

const buildPet = (overrides: Partial<Pet> = {}): Pet => ({
  id: 1,
  name: 'Тайсон',
  species: 'DOG',
  gender: 'MALE',
  age: 24,
  size: 'LARGE',
  photos: ['p1.jpg'],
  vaccinated: true,
  spayedNeutered: true,
  treatedForParasites: true,
  description: 'desc',
  status: 'AVAILABLE',
  shelter: { id: 10, name: 'Test Shelter', location: 'Київ' },
  ...overrides,
});

const renderAtId = (id: string) =>
  render(
    <MemoryRouter initialEntries={[`/uk/pets/${id}`]}>
      <Routes>
        <Route path="/:lng/pets/:id" element={<PetDetailPage />} />
      </Routes>
    </MemoryRouter>
  );

describe('PetDetailPage', () => {
  beforeEach(() => {
    mockGetPetById.mockReset();
  });

  test('calls getPetById with the numeric id from URL', async () => {
    mockGetPetById.mockResolvedValue(buildPet({ id: 5 }));

    renderAtId('5');

    await waitFor(() => {
      expect(mockGetPetById).toHaveBeenCalledWith(5);
    });
  });

  test('renders PetDetailCard with fetched pet', async () => {
    mockGetPetById.mockResolvedValue(buildPet({ id: 2, name: 'Мурчик' }));

    renderAtId('2');

    const card = await screen.findByTestId('pet-detail-card');
    expect(card).toHaveAttribute('data-pet-id', '2');
    expect(card).toHaveAttribute('data-pet-name', 'Мурчик');
  });

  test('renders not-found message when pet does not exist', async () => {
    mockGetPetById.mockResolvedValue(null);

    renderAtId('999');

    expect(await screen.findByText('petDetail.notFound')).toBeInTheDocument();
    expect(screen.queryByTestId('pet-detail-card')).not.toBeInTheDocument();
  });

  test('does not render the card while loading', () => {
    // Promise never resolves — simulate slow request
    mockGetPetById.mockReturnValue(new Promise(() => {}));

    renderAtId('1');

    expect(screen.queryByTestId('pet-detail-card')).not.toBeInTheDocument();
    expect(screen.queryByText('petDetail.notFound')).not.toBeInTheDocument();
  });
});
