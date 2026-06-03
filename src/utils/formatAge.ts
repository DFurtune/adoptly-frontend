export const formatAge = (months: number): string => {
  if (months < 12) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  } else {
    return `${Math.floor(months / 12)} ${Math.floor(months / 12) === 1 ? 'year' : 'years'}`;
  }
};
