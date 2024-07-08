import { ACTION_TYPE } from './actionType';

export const setUser = (user) => {
	return {
		type: ACTION_TYPE.SET_USER,
		payload: user,
	};
};
