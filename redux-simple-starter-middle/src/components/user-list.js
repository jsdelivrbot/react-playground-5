import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions"

class UserList extends Component {
	componentWillMount() {
		this.props.fetchUsers();
	}
	
	render() {
		return (
			<div className="user-list">
				{
					this.props.users.map((user) => 
						<div className="card card-block">
							<h4 className="card-title">
								{user.name}
							</h4>
							<p className="card-text">
								{user.company.name}
							</p>
							<a className="btn btn-primary" href={user.website}>
								Website
							</a>
						</div>
					)
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);
