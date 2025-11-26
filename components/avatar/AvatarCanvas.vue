<template>
  <div class="relative rounded-xl border border-slate-800 bg-slate-950/60 p-3 shadow-inner">
    <p class="mb-2 text-sm text-slate-300">Three.js viewport (prototype placeholder)</p>
    <div class="flex h-72 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-900/80">
      <p class="text-slate-500">Avatar scene will render here.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { loadAvatar, playAnimation } = useAvatar();

onMounted(async () => {
  await loadAvatar();
  playAnimation('idle');
});
</script>
