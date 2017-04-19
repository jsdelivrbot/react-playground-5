import { expect } from "../test_helper";
import commentReducer from "../../src/reducers/comments";
import { SAVE_COMMENT } from "../../src/actions/types";

describe("commentReducer", () => {
	it("Handles action with unknown type", () => {
		expect(commentReducer(undefined, {})).to.eql([]);
	});
	
	it(`Handles action of type: $SAVE_COMMENT`, () => {
		const payload = "New Comment";
		const action = {type: SAVE_COMMENT, payload: payload};
		
		expect(commentReducer([], action)).to.eql([payload]);
	});
});
