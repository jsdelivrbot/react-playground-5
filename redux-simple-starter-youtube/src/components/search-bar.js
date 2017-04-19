import React, {Component} from "react";

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ""
		};
	}
	
	onChange(term) {
		this.setState({term});
		this.props.onChange(term);
	}

	render() {
		return (
			<input
				className="search-bar"
				value={this.state.term}
				onChange={e => this.onChange(e.target.value)}
			/>
		);
	}
}

export default SearchBar;
