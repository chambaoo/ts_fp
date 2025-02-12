import { err, ok, Result } from 'neverthrow';
import { Post } from '../domain/post.model';
import { inMemoryPosts } from '../../../resource/post.data';
import { newBadRequestError } from '../error/bad-request.error';
import { Pagination } from '../domain/pagination';
import {
  newDuplicateEntryError,
  DuplicateEntryError,
} from '../error/duplicate-entry.error';

const searchPosts = (pagination: Pagination) => {
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

const findPost = (postId: string) => {
  const post = inMemoryPosts.find((post) => post.postId === postId);
  if (!post) {
    return err(
      newBadRequestError<typeof postId>(
        'postId is not found',
        postId,
        new Error().stack,
      ),
    );
  }
  return ok(post);
};

const addPost = (post: Post): Result<Post, DuplicateEntryError<Post>> => {
  if (inMemoryPosts.find((p) => p.postId === post.postId)) {
    return err(
      newDuplicateEntryError<typeof post>(
        'postId is already exists',
        post,
        new Error().stack,
      ),
    );
  }
  inMemoryPosts.push(post);
  return ok(post);
};

const updatePost = () => {
  return ok({});
};

export { searchPosts, findPost, addPost, updatePost };
