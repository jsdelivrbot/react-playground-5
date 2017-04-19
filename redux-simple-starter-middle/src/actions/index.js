import axios from "axios";

import { FETCH_USERS } from "./types";

const USERS_URL = "http://jsonplaceholder.typicode.com/users";

export function fetchUsers() {
	const request = axios.get(USERS_URL);
	
	return {
		type: FETCH_USERS,
		payload: request
	};
}
