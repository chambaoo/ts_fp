export type Pagination = {
  limit: number;
  offset: number;
};

export const pagination = (limit: number, offset: number): Pagination => {
  return { limit, offset };
};
