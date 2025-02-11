import { ErrorType } from './error-type';
import { BaseError } from './base.error';

export type DuplicateEntryError<T = unknown> = BaseError<T>;

export const newDuplicateEntryError = <T = unknown>(
  message: string,
  context?: T,
  stack?: string,
): DuplicateEntryError<T> => ({
  kind: 'DuplicateEntryError',
  message,
  context,
  stack: stack ?? new Error().stack,
});
