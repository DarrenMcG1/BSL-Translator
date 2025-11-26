<template>
  <div class="rounded-xl border border-slate-800 bg-slate-950/60 p-4 shadow-inner">
    <div class="flex items-center justify-between">
      <p class="font-medium text-slate-100">Microphone</p>
      <span class="text-xs text-slate-400">Speech → BSL gloss</span>
    </div>
    <p class="mt-2 text-sm text-slate-300">Prototype: uses Web Speech API when available.</p>
    <div class="mt-3 flex items-center gap-2">
      <button
        class="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 shadow hover:bg-emerald-400"
        @click="startListening"
        :disabled="isListening"
      >
        {{ isListening ? 'Listening…' : 'Start listening' }}
      </button>
      <button
        class="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-100 shadow hover:bg-slate-700"
        @click="stopListening"
        :disabled="!isListening"
      >
        Stop
      </button>
    </div>
    <p v-if="transcript" class="mt-3 rounded bg-slate-900 px-3 py-2 text-sm text-slate-200">{{ transcript }}</p>
  </div>
</template>

<script setup lang="ts">
const { translateText } = useTranslationStore();
const transcript = ref('');
const isListening = ref(false);
let recognition: SpeechRecognition | null = null;

if (process.client && 'webkitSpeechRecognition' in window) {
  const SpeechRecognitionConstructor = window.webkitSpeechRecognition;
  recognition = new SpeechRecognitionConstructor();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    transcript.value = text;
    translateText(text);
  };

  recognition.onend = () => {
    isListening.value = false;
  };
}

const startListening = () => {
  if (!recognition) return;
  transcript.value = '';
  isListening.value = true;
  recognition.start();
};

const stopListening = () => {
  recognition?.stop();
};
</script>
