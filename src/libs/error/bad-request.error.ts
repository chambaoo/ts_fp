import { BaseError } from './base.error';

export type BadRequestError<T = unknown> = BaseError<T>;

export const newBadRequestError = <T = unknown>(
  message: string,
  context?: T,
  stack?: string,
): BadRequestError<T> => ({
  kind: 'BadRequestError',
  message,
  context,
  stack: stack ?? new Error().stack,
});
