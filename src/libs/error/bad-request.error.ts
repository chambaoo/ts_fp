import { ErrorType } from './error-type';

export type BadRequestError<T = unknown> = {
  kind: ErrorType;
  message: string;
  context?: T;
  stack?: string;
};

export const newBadRequestError = <T = unknown>(
  message: string,
  context?: T,
  stack?: string,
): BadRequestError<T> => ({
  kind: 'BadRequestError',
  message,
  context,
  stack: stack ?? new Error().stack, // エラーのスタックトレースを取得（オプション）
});
