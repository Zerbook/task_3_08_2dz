import { buildUrl } from './src/utils/build-url.js';
import { request } from './src/utils/request.js';

// console.log(buildUrl('/register'));

// const login = 'oleg';
// const password = '123456';

// request(buildUrl('/register'), 'POST', { login, password }).then(({ error, user }) => {
// 	console.log('error', error);
// 	console.log('user', user);
// });

// добавление коментария

// const postId = '6892f876eccc244031d2fdd2';
// const content = 'привет мир';

// request(`/posts/${postId}/comments`, 'POST', { content });

const login = 'oleg';
const password = '123456';
request('/login', 'POST', { login, password }).then(({ error, user }) => {
	console.log(user);
});
