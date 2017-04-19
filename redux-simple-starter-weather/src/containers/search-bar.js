import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchWeather } from "../actions/index";


class SearchBar extends Component {
	constructor(props) {
		super(props);
		
		this.state = { term: "" };
		
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onInputChange(evnt) {
		// console.log(evnt.target.value);
		this.setState({ term: evnt.target.value });
	}
	
	onSubmit(evnt) {
		evnt.preventDefault();
		
		this.props.fetchWeather(this.state.term);
		this.setState({ term: "" });
	}
	
	render() {
		return (
			<form 
				className="input-group"
				onSubmit={ this.onSubmit }
			>
				<input 
					placeholder="Get 5 day forecast"
					value={ this.state.term }
					onChange={ this.onInputChange }
					className="form-control"					
				/>
				<span className="input-group-btn">
					<button 
						type="submit" 
						className="btn btn-secondary"
					>
						SearchBar
					</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
