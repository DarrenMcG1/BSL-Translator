# UK BSL Translator & Learning Platform

Nuxt 3 prototype scaffold for a bidirectional British Sign Language (BSL) translator and learning companion. The goal is to translate English text/speech to BSL gloss + avatar animation and recognise BSL input from webcam to English.

## Features (scaffold)
- Split layout for input, avatar viewport, and learning widgets.
- Pinia stores for translation, learning progress, and settings.
- Placeholder composables for Ollama-powered glossing, MediaPipe capture, and avatar control.
- Sample sign database aligned with BSL non-manual features.

## Getting started
```bash
npm install
npm run dev
```

The current scaffold includes placeholders for MediaPipe, Three.js avatar rendering, and Ollama translation. Replace the console stubs with real implementations as you integrate each subsystem.
