<template>
  <div class="min-h-screen bg-slate-900 text-slate-100">
    <header class="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p class="text-xs uppercase tracking-wide text-slate-400">UK BSL Translator</p>
          <h1 class="text-xl font-semibold">Bidirectional BSL learning companion</h1>
        </div>
        <nav class="flex items-center gap-3 text-sm text-slate-300">
          <NuxtLink to="#learn" class="hover:text-white">Learn</NuxtLink>
          <NuxtLink to="#translate" class="hover:text-white">Translate</NuxtLink>
          <NuxtLink to="#practice" class="hover:text-white">Practice</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1.1fr_1.3fr_1fr]" id="translate">
      <section class="space-y-4">
        <h2 class="text-lg font-semibold">Input</h2>
        <TextInput />
        <SpeechInput />
        <WebcamCapture />
      </section>

      <section class="space-y-4" id="practice">
        <h2 class="text-lg font-semibold">Avatar</h2>
        <AvatarControls />
        <AvatarCanvas />
      </section>

      <section class="space-y-4" id="learn">
        <h2 class="text-lg font-semibold">Output & Learning</h2>
        <TranslationOutput />
        <FlashcardDeck />
        <QuizMode />
        <ProgressChart />
      </section>
    </main>
  </div>
</template>
