import axios from "axios";

const API_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=09s191P0f2p6";

export const FETCH_POSTS = "FETCH_POSTS";
export function fetchPosts() {
	const request = axios.get(`${API_URL}/posts${API_KEY}`);
	
	return {
		  type: FETCH_POSTS
		, payload: request
	};
}

export const CREATE_POST = "CREATE_POST";
export function createPost(props) {
	const request = axios.post(`${API_URL}/posts${API_KEY}`, props);
	
	return {
		  type: CREATE_POST
		, payload: request
	};
}

export const FETCH_POST = "FETCH_POST";
export function fetchPost(id) {
	const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`);

	return {
		  type: FETCH_POST
		, payload: request
	};
}

export const DELETE_POST = "DELETE_POST";
export function deletePost(id) {
	const request = axios.delete(`${API_URL}/posts/${id}${API_KEY}`);

	return {
		  type: DELETE_POST
		, payload: request
	};
}
