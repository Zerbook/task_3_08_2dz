import { buildUrl } from './src/utils/build-url.js';
import { request } from './src/utils/request.js';

console.log(buildUrl('/register'));

const login = 'oleg';
const password = '123456';

request(buildUrl('/register'), 'POST', { login, password }).then(({ error, user }) => {
	console.log('error', error);
	console.log('user', user);
});
