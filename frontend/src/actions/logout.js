import { ACTION_TYPE } from './action-type';
// import { server } from '../bff';
import { request } from '../utils/request.js';

export const logout = () => {
	request('/logout', 'POST');
	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
