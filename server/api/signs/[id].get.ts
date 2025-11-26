import { defineEventHandler, sendError, createError } from 'h3';
import signs from '~/data/signs.json';

export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  const sign = signs.find((item) => item.id === id);

  if (!sign) {
    return sendError(event, createError({ statusCode: 404, statusMessage: 'Sign not found' }));
  }

  return sign;
});
