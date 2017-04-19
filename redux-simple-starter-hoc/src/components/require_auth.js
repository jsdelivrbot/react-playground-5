import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
		
	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}
		
		componentWillMount() {
			if(!this.props.authd)
				this.context.router.push("/");
		}
		
		componentWillUpdate(nextProps) {
			if(!nextProps.authd)
				this.context.router.push("/");
		}
		
		render() {
			return <ComposedComponent {...this.props} />
		}
	}
	
	function mapStateToProps(state) {
		return { authd: state.authd };
	}
	
	return connect(mapStateToProps)(Authentication);
}
