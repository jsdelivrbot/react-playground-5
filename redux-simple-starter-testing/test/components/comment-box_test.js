import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/comment-box";

describe("CommentBox", () => {
	let component;
	
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});
	
	it("Has class comment-box", () => {
		expect(component).to.have.class("comment-box");
	});
	
	it("Has a text area", () => {
		expect(component.find("textarea")).to.exist;
	});
	
	it("Has a button", () => {
		expect(component.find("button")).to.exist;
	});
	
	describe("Textarea text", () => {
		beforeEach(() => {
			component.find("textarea").simulate("change", "new comment");
		});
		
		it("Shows entered text", () => {
			expect(component.find("textarea")).to.have.value("new comment");
		});
		
		it("Clears text when submitted", () => {
			component.simulate("submit");
			expect(component.find("textarea")).to.have.value("");
		});
	});
});
