<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">Progress</p>
      <span class="text-xs text-slate-400">Tracking accuracy & streaks</span>
    </div>
    <div class="mt-3 space-y-2 text-sm text-slate-200">
      <p>Signs learned: <span class="font-semibold text-cyan-200">{{ stats.learned }}</span></p>
      <p>Recognition accuracy: <span class="font-semibold text-cyan-200">{{ stats.accuracy }}%</span></p>
      <p>Daily streak: <span class="font-semibold text-cyan-200">{{ stats.streak }} days</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const { stats } = storeToRefs(useLearningStore());
</script>
