import { defineEventHandler, readBody } from 'h3';
import { useOllama } from '#imports';

export default defineEventHandler(async (event) => {
  const { text } = await readBody<{ text: string }>(event);
  const { translateToGloss } = useOllama();
  const gloss = await translateToGloss(text);
  return { gloss };
});
