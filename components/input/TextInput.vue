<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">English → BSL gloss</p>
      <span class="text-xs text-slate-400">Topic-comment order enforced</span>
    </div>
    <textarea
      v-model="english"
      class="mt-2 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm focus:border-cyan-400 focus:outline-none"
      rows="4"
      placeholder="Type an English sentence..."
      @input="resetError"
    />
    <button
      class="mt-3 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 shadow hover:bg-cyan-400"
      @click="translate"
      :disabled="status === 'loading'"
    >
      <span v-if="status === 'loading'">Translating…</span>
      <span v-else>Translate to BSL gloss</span>
    </button>
    <p v-if="error" class="mt-2 rounded bg-rose-900/40 px-3 py-2 text-xs text-rose-100">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const english = ref('');
const translationStore = useTranslationStore();
const { status, error } = storeToRefs(translationStore);

const translate = () => {
  translationStore.translateText(english.value);
};

const resetError = () => {
  translationStore.resetError();
};
</script>
