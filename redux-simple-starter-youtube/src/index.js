import _ from "lodash";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search-bar";
import VideoList from "./components/video-list";
import VideoDetail from "./components/video-detail";

const youtubeApiKey = "AIzaSyC6IVLFleiETxoFdD_SnzBxwVnr4BYwius";


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selected: null
		};
		
		this.search("");
	}
	
	search(term) {
		YTSearch({key: youtubeApiKey, term: term}, (videos) => {
			this.setState({
				videos: videos, 
				selected: videos[0]
			});
		});
	}
	
	render() {
		const search = _.debounce((term) => {this.search(term)}, 300);
		
		return (
			<div>
				<SearchBar onChange={term => search(term)} />
				<VideoDetail video={this.state.selected} />
				<VideoList 
					videos={this.state.videos}
					onVideoSelected={selected => this.setState({selected})}
				/>
			</div>
		);
	}
}

ReactDOM.render(
	  <App />
	, document.querySelector(".container")
);
