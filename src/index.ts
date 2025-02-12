import { err, ok } from 'neverthrow';
import { searchPosts } from './libs/repository/post.repository';
import { pagination } from './libs/domain/pagination';

const main = () => {
  console.log('start...');

  const p = pagination(10, 0);
  const result = ok(p).andThen(searchPosts);

  console.log(result);

  const pErr = pagination(-1, 0);

  const resultErr = ok(pErr).andThen(searchPosts);

  console.log(resultErr);

  const resultErrMapErr = ok(pErr)
    .andThen(searchPosts)
    .mapErr((error) => {
      if (error.kind === 'BadRequestError')
        console.log('リクエストが不正だよ。');

      return error;
    });

  console.log(resultErrMapErr);

  const resultErrOrElse = ok(pErr)
    .andThen(searchPosts)
    .orElse((error) => {
      if (error.kind === 'BadRequestError') return ok(error.context);

      return err(error);
    })
    .map((context) => {
      console.log(context);
    });

  console.log(resultErrOrElse);

  console.log('end...');
};

main();
