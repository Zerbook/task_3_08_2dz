import { buildUrl } from './build-url.js';

export const request = (url, method = 'GET', data) =>
	fetch(buildUrl(url), {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => res.json());

//buildUrl('/register')
// export function request(url, method, data) {
// 	return fetch(url, {
// 		headers: {
// 			'content-type': 'application/json',
// 		},
// 		method: method || 'GET',
// 		body: data ? JSON.stringify(data) : undefined,
// 	}).then((res) => res.json());
// }
