import { combineReducers } from "redux";
import BooksReducer from "./books.js";
import ActiveBookReducer from "./active-book.js";

const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBookReducer
});

export default rootReducer;
