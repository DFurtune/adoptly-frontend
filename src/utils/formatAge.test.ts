import { formatAge } from './formatAge';
import { TFunction } from 'i18next';

const mockT = jest.fn(
  (key: string, opts: { count: number }) => `${key}|count:${opts.count}`
) as unknown as TFunction;

describe('formatAge', () => {
  beforeEach(() => {
    (mockT as unknown as jest.Mock).mockClear();
  });

  describe('age under 12 months', () => {
    test('uses ageMonths key with months as count', () => {
      const result = formatAge(5, mockT);

      expect(mockT).toHaveBeenCalledWith('petDetail.ageMonths', { count: 5 });
      expect(result).toBe('petDetail.ageMonths|count:5');
    });

    test('passes 0 months as count', () => {
      formatAge(0, mockT);

      expect(mockT).toHaveBeenCalledWith('petDetail.ageMonths', { count: 0 });
    });

    test('passes 11 months as count (just below 12-month threshold)', () => {
      formatAge(11, mockT);

      expect(mockT).toHaveBeenCalledWith('petDetail.ageMonths', { count: 11 });
    });
  });

  describe('age 12 months or more', () => {
    test('exactly 12 months → 1 year', () => {
      const result = formatAge(12, mockT);

      expect(mockT).toHaveBeenCalledWith('petDetail.ageYears', { count: 1 });
      expect(result).toBe('petDetail.ageYears|count:1');
    });

    test('24 months → 2 years', () => {
      formatAge(24, mockT);

      expect(mockT).toHaveBeenCalledWith('petDetail.ageYears', { count: 2 });
    });

    test('60 months → 5 years', () => {
      formatAge(60, mockT);

      expect(mockT).toHaveBeenCalledWith('petDetail.ageYears', { count: 5 });
    });

    test('floors fractional years: 13 months → 1 year', () => {
      formatAge(13, mockT);

      expect(mockT).toHaveBeenCalledWith('petDetail.ageYears', { count: 1 });
    });

    test('floors fractional years: 23 months → 1 year', () => {
      formatAge(23, mockT);

      expect(mockT).toHaveBeenCalledWith('petDetail.ageYears', { count: 1 });
    });
  });
});
