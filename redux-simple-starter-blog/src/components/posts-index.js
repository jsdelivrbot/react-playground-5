import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import { fetchPosts } from "../actions/index"

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary" >
						Add Post
					</Link>
				</div>			
				<h3>Posts</h3>
				<ul className="list-group">
					{console.log(this.state)}
					{
						this.props.posts.map(post => 
							<li key={post.id} className="list-group-item">
								<Link to={"posts/" + post.id} >
									<span className="pull-xs-right">
										{post.categories}
									</span>
									<strong>
										{post.title}
									</strong>
								</Link>
							</li>
						)
					}
				</ul>	
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log(state.posts);
	return { 
		posts: state.posts.all 
	};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
