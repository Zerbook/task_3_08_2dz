export const request = (url, method = 'GET', data) =>
	fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => res.json());

// export function request(url, method, data) {
// 	return fetch(url, {
// 		headers: {
// 			'content-type': 'application/json',
// 		},
// 		method: method || 'GET',
// 		body: data ? JSON.stringify(data) : undefined,
// 	}).then((res) => res.json());
// }
