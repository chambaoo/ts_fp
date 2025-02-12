import { findPost } from '../../../src/libs/repository/post.repository';

describe('PostRepository', () => {
  describe('find', () => {
    it('should return ok when a post found successfully', () => {
      const post = findPost('01HZX0XYZ123456789ABCDEF');
      expect(post.isOk()).toBe(true);
    });
  });
});
