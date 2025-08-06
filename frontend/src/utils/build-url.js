import { API_BASE_URL } from '../constants';

export const buildUrl = (path = '') =>
	`${API_BASE_URL}${path.startsWith('/') ? path : '/' + path}`;
