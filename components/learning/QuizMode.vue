<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">Quiz mode</p>
      <span class="text-xs text-slate-400">Production vs recognition</span>
    </div>
    <p class="mt-2 text-sm text-slate-300">Answer by signing into the webcam or typing the gloss.</p>
    <div class="mt-3 flex items-center gap-2">
      <input
        v-model="answer"
        type="text"
        class="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm"
        placeholder="Enter gloss (e.g., THANK-YOU)"
      />
      <button class="rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400" @click="submit">
        Submit
      </button>
    </div>
    <p class="mt-2 text-xs text-slate-400">Target: {{ prompt }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const learningStore = useLearningStore();
const { prompt } = storeToRefs(learningStore);
const answer = ref('');

const submit = () => {
  learningStore.submitAnswer(answer.value);
  answer.value = '';
};
</script>
