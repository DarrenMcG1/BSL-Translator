<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">BSL gloss output</p>
      <span class="text-xs text-slate-400">Includes non-manual markers</span>
    </div>
    <p class="mt-2 whitespace-pre-line rounded-lg bg-slate-900 px-3 py-2 text-sm text-cyan-100">
      {{ gloss || 'Awaiting translation...' }}
    </p>
    <div class="mt-2 text-xs text-slate-400">Topic-comment, spatial indexing, and fingerspelling markers shown in uppercase.</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const { gloss } = storeToRefs(useTranslationStore());
</script>
