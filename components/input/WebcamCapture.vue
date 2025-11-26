<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">Webcam recognition</p>
      <span class="text-xs text-slate-400">Fingerspelling prototype</span>
    </div>
    <div class="relative mt-3 overflow-hidden rounded-lg border border-slate-800 bg-black/40">
      <video ref="videoEl" autoplay muted playsinline class="h-52 w-full object-cover"></video>
      <canvas ref="overlayEl" class="absolute inset-0"></canvas>
    </div>
    <div class="mt-3 flex items-center gap-2">
      <button
        class="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-slate-950 shadow hover:bg-indigo-400"
        @click="toggleCamera"
      >
        {{ isActive ? 'Stop camera' : 'Start camera' }}
      </button>
      <p class="text-xs text-slate-400">MediaPipe Holistic pipeline initialised client-side.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoEl = ref<HTMLVideoElement | null>(null);
const overlayEl = ref<HTMLCanvasElement | null>(null);
const isActive = ref(false);
const mediapipe = useMediaPipe();
const { setPoseResult } = useTranslationStore();

const toggleCamera = async () => {
  if (isActive.value) {
    await mediapipe.stop();
    isActive.value = false;
    return;
  }

  if (videoEl.value && overlayEl.value) {
    await mediapipe.start(videoEl.value, overlayEl.value, (result) => setPoseResult(result));
    isActive.value = true;
  }
};
</script>
