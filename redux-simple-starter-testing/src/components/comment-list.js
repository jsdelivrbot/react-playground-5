import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
	render() {
		return (
			<ul className="comment-list">
				{
					this.props.comments.map((comment) =>
						<li key={comment}>
							{comment}
						</li>
					)
				}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
