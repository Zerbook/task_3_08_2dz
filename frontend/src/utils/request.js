import { buildUrl } from './build-url.js';

export const request = (url, method = 'GET', data) => {
	// console.log(url);
	// console.log(buildUrl(url));
	// const test = {
	// 	method,
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: data ? JSON.stringify(data) : undefined,
	// };
	// console.log(test);

	return fetch(buildUrl(url), {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include', // Включает отправку кук
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => res.json());
};
