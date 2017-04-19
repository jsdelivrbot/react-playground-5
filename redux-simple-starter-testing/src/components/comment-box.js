import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			comment: ""
		};
	}
	
	onChange(e) {
		this.setState({ comment: e.target.value });
	}
	
	onSubmit(e) {
		e.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: "" });
	}
	
	render() {
		return (
			<form 
				className="comment-box"
				onSubmit={this.onSubmit.bind(this)} 
			>
				<h4>Add a comment</h4>
				<textarea 
					value={this.state.comment}
					onChange={this.onChange.bind(this)} 
				/>
				<div>
					<button action="submit">submit</button>
				</div>
			</form>
		);
	}
}

export default connect(null, actions)(CommentBox);
