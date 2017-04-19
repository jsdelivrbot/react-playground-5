import React, { Component, PropTypes } from "react";
import { reduxForm } from "redux-form"
import { Link } from "react-router"

import { createPost } from "../actions/index";

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	
	onSubmit(props) {
		this.props.createPost(props).then(() => {
			this.context.router.push("/");
		});
	}
		
	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Link to="/" className="btn btn-secondary">Back</Link>
				<button type="submit" className="btn btn-primary pull-xs-right">
					Post
				</button>
				<h3>Create</h3>
				<div className={`form-group ${title.touched && title.invalid ? "has-danger" : ""}`}>
					<label>Title</label>
					<input 
						type="text" 
						className="form-control" 
						{...title}
					/>
					<div className="text-help">
						{title.touched ? title.error : ""}
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ""}`}>
					<label>Categories</label>
					<input 
						type="text" 
						className="form-control" 
						{...categories}
					/>
					<div className="text-help">
						{categories.touched ? categories.error : ""}
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ""}`}>
					<label>Content</label>
					<textarea 
						className="form-control"
						{...content} 
					/>
					<div className="text-help">
						{content.touched ? content.error : ""}
					</div>
				</div>
			</form>
		);
	}
}

function validate(values) {
	const errors = { };
	
	if(!values.title) {
		errors.title = "Title required";
	}
	
	if(!values.categories) {
		errors.categories = "Categories required";
	}
	
	if(!values.content) {
		errors.content = "Content required";
	}
	
	return errors;
}

export default reduxForm({
	  form: "PostsNew"
	, fields: [
		  "title"
		, "categories"
		, "content"
	]
	, validate
}, null, { createPost })(PostsNew);
