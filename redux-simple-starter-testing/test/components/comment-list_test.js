import { renderComponent, expect } from "../test_helper";
import CommentList from "../../src/components/comment-list";

describe("CommentList", () => {
	let component;
	const props = { comments: ["New Comment", "Another Comment"] };
	
	beforeEach(() => {
		component = renderComponent(CommentList, null, props);
	});

	it("Shows each comment in a list", () => {
		expect(component).to.contain("New Comment");
		expect(component).to.contain("Another Comment");
	});

	it("Shows an li for each comment in a list", () => {
		expect(component.find("li").length).to.equal(props.comments.length);
	});
});
