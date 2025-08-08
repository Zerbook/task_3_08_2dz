import { buildUrl } from './build-url.js';

export const request = (url, method = 'GET', data) => {
	return fetch(buildUrl(url), {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include', // Включает отправку кук
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => res.json());
};
