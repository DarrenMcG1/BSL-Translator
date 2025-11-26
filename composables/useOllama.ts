export const useOllama = () => {
  const config = useRuntimeConfig();

  const translateToGloss = async (text: string): Promise<string> => {
    // Placeholder: call local Ollama instance with BSL prompt
    console.debug('translate via ollama', text, config.public.ollamaBaseUrl);
    return `[q] SAMPLE GLOSS FOR ${text.toUpperCase()}`;
  };

  return { translateToGloss };
};
