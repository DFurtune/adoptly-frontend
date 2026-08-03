import { TFunction } from 'i18next';

export const formatAge = (months: number, t: TFunction): string => {
  if (months < 12) {
    return t('petDetail.ageMonths', { count: months });
  }
  const years = Math.floor(months / 12);
  return t('petDetail.ageYears', { count: years });
};
