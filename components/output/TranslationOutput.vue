<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">BSL gloss output</p>
      <span
        class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300"
      >
        <span
          class="h-2 w-2 rounded-full"
          :class="{
            'bg-emerald-400': status === 'ready',
            'bg-amber-400': status === 'loading',
            'bg-slate-500': status === 'idle',
            'bg-rose-400': status === 'error',
          }"
        ></span>
        {{ statusLabel }}
      </span>
    </div>

    <p class="mt-2 whitespace-pre-line rounded-lg bg-slate-900 px-3 py-2 text-sm text-cyan-100">
      {{ gloss || 'Awaiting translation...' }}
    </p>
    <div class="mt-2 text-xs text-slate-400">Topic-comment, spatial indexing, and fingerspelling markers shown in uppercase.</div>

    <div v-if="matchedSigns.length" class="mt-4 space-y-2">
      <p class="text-xs uppercase tracking-wide text-slate-400">Sign breakdown</p>
      <div class="grid grid-cols-2 gap-3 text-sm lg:grid-cols-3">
        <div
          v-for="item in matchedSigns"
          :key="item.token"
          class="rounded-lg border border-slate-800 bg-slate-900/80 p-3"
        >
          <p class="text-sm font-semibold text-cyan-100">{{ item.token }}</p>
          <p class="text-xs text-slate-400">
            {{ item.sign ? item.sign.englishMeanings.join(', ') : 'No match in local DB' }}
          </p>
          <div v-if="item.sign" class="mt-2 text-[11px] text-slate-400">
            <p>Handshape: <span class="text-slate-200">{{ item.sign.handshape }}</span></p>
            <p>Location: <span class="text-slate-200">{{ item.sign.location }}</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 grid gap-3 lg:grid-cols-2">
      <div class="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
        <p class="text-xs uppercase tracking-wide text-slate-400">Latest webcam classification</p>
        <p v-if="recognizedSign" class="mt-2 text-sm font-semibold text-emerald-200">{{ recognizedSign.gloss }}</p>
        <p v-if="recognizedSign" class="text-xs text-slate-400">{{ recognizedSign.englishMeanings.join(', ') }}</p>
        <p v-else class="mt-2 text-sm text-slate-400">No pose detected yet.</p>
      </div>

      <div class="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
        <p class="text-xs uppercase tracking-wide text-slate-400">Recent translations</p>
        <ul class="mt-2 space-y-1 text-xs text-slate-300">
          <li v-for="item in history" :key="item.timestamp" class="flex justify-between gap-2">
            <span class="truncate">{{ item.input }}</span>
            <span class="text-cyan-200">{{ item.gloss }}</span>
          </li>
          <li v-if="!history.length" class="text-slate-500">No translations yet.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const translationStore = useTranslationStore();
const { gloss, matchedSigns, status, history, recognizedSign } = storeToRefs(translationStore);

const statusLabel = computed(() => {
  if (status.value === 'loading') return 'Translating';
  if (status.value === 'ready') return 'Ready';
  if (status.value === 'error') return 'Error';
  return 'Idle';
});
</script>
