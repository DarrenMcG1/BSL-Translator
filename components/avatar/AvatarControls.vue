<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">Avatar controls</p>
      <span class="text-xs text-slate-400">Speed, camera, pose</span>
    </div>
    <div class="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-200">
      <label class="flex items-center gap-2">
        <span class="w-24 text-slate-400">Playback</span>
        <input type="range" min="0.5" max="1.5" step="0.05" v-model.number="settings.avatarSpeed" class="w-full" />
      </label>
      <label class="flex items-center gap-2">
        <span class="w-24 text-slate-400">Camera</span>
        <select v-model="settings.camera" class="w-full rounded-md border border-slate-800 bg-slate-900 px-2 py-1">
          <option value="orbit">Orbit</option>
          <option value="static">Static</option>
        </select>
      </label>
      <label class="flex items-center gap-2">
        <span class="w-24 text-slate-400">NMF</span>
        <input type="checkbox" v-model="settings.showNonManuals" class="accent-cyan-500" />
        <span class="text-xs text-slate-400">Show facial cues</span>
      </label>
      <label class="flex items-center gap-2">
        <span class="w-24 text-slate-400">Blend</span>
        <input type="range" min="0" max="1" step="0.05" v-model.number="settings.transitionBlend" class="w-full" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const settingsStore = useSettingsStore();
const settings = storeToRefs(settingsStore);
</script>
