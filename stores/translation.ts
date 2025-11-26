import { defineStore } from 'pinia';
import type { PoseResult } from '~/composables/useMediaPipe';
import { useOllama } from '~/composables/useOllama';
import { useSignDatabase } from '#imports';

export const useTranslationStore = defineStore('translation', () => {
  const gloss = ref('');
  const poseResult = ref<PoseResult | null>(null);
  const signDatabase = useSignDatabase();
  const { translateToGloss } = useOllama();

  const translateText = async (text: string) => {
    gloss.value = await translateToGloss(text);
  };

  const setPoseResult = (result: PoseResult) => {
    poseResult.value = result;
  };

  const classifyPose = () => {
    if (!poseResult.value) return null;
    // Placeholder classification using sign database
    return signDatabase.all.value[0];
  };

  return { gloss, poseResult, translateText, setPoseResult, classifyPose };
});
