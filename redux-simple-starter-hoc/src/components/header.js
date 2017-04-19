import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import * as actions from "../actions";

class Header extends Component {
	authButton() {
		if(this.props.authd){
			return( 
				<button 
					onClick={() => this.props.auth(false)}
				>
					Logout
				</button>
			);
		}
		
		return (
			<button 
				onClick={() => this.props.auth(true)}
			>
				Login
			</button>);
	}
	
	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/resources">Resources</Link>
					</li>
					<li className="nav-item">
						{this.authButton()}
					</li>
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { authd: state.authd };
}

export default connect(mapStateToProps, actions)(Header);
