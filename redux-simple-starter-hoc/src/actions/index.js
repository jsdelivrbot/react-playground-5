import { CHANGE_AUTH } from "./types";

export function auth(isAuthd) {
	return {
		type: CHANGE_AUTH,
		payload: isAuthd
	};
}
