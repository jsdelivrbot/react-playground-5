import { expect } from "../test_helper";
import { SAVE_COMMENT } from "../../src/actions/types";
import { saveComment } from "../../src/actions/index";

describe("actions", () => {
	describe("saveComment", () => {
		it("Has correct type", () => {
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT);
		});
		
		it("Has correct payload", () => {
			const comment = "New Comment";
			const action = saveComment(comment);
			expect(action.payload).to.equal(comment);
		});
	});
});

