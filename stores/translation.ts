import { defineStore } from 'pinia';
import type { PoseResult } from '~/composables/useMediaPipe';
import { useOllama } from '~/composables/useOllama';
import type { Sign } from '~/types/bsl';
import { useSignDatabase } from '#imports';

export const useTranslationStore = defineStore('translation', () => {
  const gloss = ref('');
  const poseResult = ref<PoseResult | null>(null);
  const recognizedSign = ref<Sign | null>(null);
  const history = ref<{ input: string; gloss: string; timestamp: number }[]>([]);
  const status = ref<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const error = ref<string | null>(null);
  const signDatabase = useSignDatabase();
  const { translateToGloss } = useOllama();

  const translateText = async (text: string) => {
    if (!text.trim()) return;

    status.value = 'loading';
    error.value = null;

    try {
      const response = await $fetch<{ gloss: string }>('/api/translate', {
        method: 'POST',
        body: { text },
      });

      gloss.value = response.gloss;
      history.value.unshift({ input: text, gloss: response.gloss, timestamp: Date.now() });
      status.value = 'ready';
    } catch (err) {
      console.error('Failed to translate via API, falling back to local prompt', err);

      try {
        const fallback = await translateToGloss(text);
        gloss.value = fallback;
        history.value.unshift({ input: text, gloss: fallback, timestamp: Date.now() });
        status.value = 'ready';
      } catch (fallbackErr) {
        console.error('Fallback translation failed', fallbackErr);
        error.value = (fallbackErr as Error)?.message ?? 'Failed to translate text.';
        status.value = 'error';
      }
    }
  };

  const setPoseResult = (result: PoseResult) => {
    poseResult.value = result;
  };

  const classifyPose = () => {
    if (!poseResult.value) return null;
    // Placeholder classification using sign database
    recognizedSign.value = signDatabase.randomByCategory('greeting') ?? signDatabase.all.value[0];
    return recognizedSign.value;
  };

  const glossTokens = computed(() =>
    gloss.value
      .split(/\s+/)
      .map((token) => token.replace(/[^A-Z-]/g, ''))
      .filter(Boolean),
  );

  const matchedSigns = computed(() =>
    glossTokens.value.map((token) => ({ token, sign: signDatabase.findByGloss(token) ?? null })),
  );

  const resetError = () => {
    error.value = null;
    status.value = gloss.value ? 'ready' : 'idle';
  };

  return {
    gloss,
    poseResult,
    recognizedSign,
    history,
    status,
    error,
    matchedSigns,
    glossTokens,
    translateText,
    setPoseResult,
    classifyPose,
    resetError,
  };
});
