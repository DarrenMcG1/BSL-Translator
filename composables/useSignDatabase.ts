import signs from '~/data/signs.json';
import type { Sign } from '~/types/bsl';

export const useSignDatabase = () => {
  const all = computed<Sign[]>(() => signs);

  const findByGloss = (gloss: string) => all.value.find((sign) => sign.gloss === gloss);
  const randomByCategory = (category: Sign['category']) => {
    const matches = all.value.filter((sign) => sign.category === category);
    return matches[Math.floor(Math.random() * matches.length)];
  };

  return { all, findByGloss, randomByCategory };
};
