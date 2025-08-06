import { API_BASE_URL } from '../constants/api-base-url.js';

export const buildUrl = (path = '') =>
	`${API_BASE_URL}${path.startsWith('/') ? path : '/' + path}`;
