import { ErrorType } from './error-type';

export type BaseError<T = unknown> = {
  kind: ErrorType;
  message: string;
  context?: T;
  stack?: string;
};

export const newBaseError = <T = unknown>(
  message: string,
  context?: T,
  stack?: string,
): BaseError<T> => ({
  kind: 'BaseError',
  message,
  context,
  stack: stack ?? new Error().stack,
});
