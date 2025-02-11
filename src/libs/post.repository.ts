import { err, ok } from 'neverthrow';
import { Post } from './domain/post.model';
import { inMemoryPosts } from '../resource/post.data';
import { newBadRequestError } from './error/bad-request.error';
import { Pagination } from './domain/pagination';

export const searchPosts = (pagination: Pagination) => {
  if (pagination.limit <= 0) {
    return err(
      newBadRequestError<typeof pagination>(
        'pagination.limit should be greater than 0',
        pagination,
        new Error().stack,
      ),
    );
  }
  return ok(inMemoryPosts.slice(pagination.offset, pagination.limit));
};

export const findPost = (postId: string) => {
  return inMemoryPosts.find((post) => post.postId === postId);
};

export const addPost = (post: Post) => {
  inMemoryPosts.push(post);
  return post;
};
