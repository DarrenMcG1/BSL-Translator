<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">Flashcards</p>
      <span class="text-xs text-slate-400">Spaced repetition</span>
    </div>
    <div class="mt-3 rounded-lg border border-slate-800 bg-slate-900 px-4 py-6">
      <p class="text-sm font-semibold text-cyan-100">{{ currentCard.gloss }}</p>
      <p class="mt-2 text-xs uppercase tracking-wide text-slate-400">{{ currentCard.english }}</p>
      <div class="mt-4 flex gap-2">
        <button class="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400" @click="markEasy">
          Easy
        </button>
        <button class="rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400" @click="markHard">
          Hard
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const learningStore = useLearningStore();
const { currentCard } = storeToRefs(learningStore);
const markEasy = () => learningStore.rateCard('easy');
const markHard = () => learningStore.rateCard('hard');
</script>
