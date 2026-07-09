import { Pet } from '../types/pet';
import petMock from './mock/pets.json';

//TODO: Replace with actual API calls when backend is ready
export const getPetById = async (id: number): Promise<Pet | null> => {
  const pet = (petMock as Pet[]).find(p => p.id === id);
  return pet ?? null;
};
