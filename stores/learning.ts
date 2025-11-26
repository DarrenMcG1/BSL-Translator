import { defineStore } from 'pinia';
import type { Sign } from '~/types/bsl';
import { useSignDatabase } from '#imports';

export const useLearningStore = defineStore('learning', () => {
  const signDatabase = useSignDatabase();
  const currentCard = ref<{ gloss: string; english: string }>({ gloss: 'HELLO', english: 'hello' });
  const prompt = ref('THANK-YOU');
  const stats = ref({ learned: 0, accuracy: 0, streak: 0 });

  const rateCard = (difficulty: 'easy' | 'hard') => {
    if (difficulty === 'easy') stats.value.learned += 1;
    refreshCard();
  };

  const submitAnswer = (answer: string) => {
    stats.value.accuracy = Math.min(100, stats.value.accuracy + (answer.toUpperCase() === prompt.value ? 5 : 0));
    prompt.value = signDatabase.randomByCategory('greeting')?.gloss ?? 'HELLO';
  };

  const refreshCard = () => {
    const card = signDatabase.randomByCategory('greeting') ?? signDatabase.all.value[0];
    currentCard.value = { gloss: card.gloss, english: card.englishMeanings[0] };
  };

  refreshCard();

  return { currentCard, prompt, stats, rateCard, submitAnswer };
});
