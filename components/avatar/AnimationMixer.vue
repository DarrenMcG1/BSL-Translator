<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">Animation mixer</p>
      <span class="text-xs text-slate-400">Blend hand, face, body</span>
    </div>
    <div class="mt-3 grid grid-cols-3 gap-3 text-sm text-slate-200">
      <label class="flex flex-col gap-1">
        <span class="text-xs text-slate-400">Hand shape weight</span>
        <input type="range" min="0" max="1" step="0.05" v-model.number="mixer.handWeight" />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-xs text-slate-400">Body weight</span>
        <input type="range" min="0" max="1" step="0.05" v-model.number="mixer.bodyWeight" />
      </label>
      <label class="flex flex-col gap-1">
        <span class="text-xs text-slate-400">Non-manual weight</span>
        <input type="range" min="0" max="1" step="0.05" v-model.number="mixer.nmfWeight" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const { mixer } = storeToRefs(useAvatar());
</script>
