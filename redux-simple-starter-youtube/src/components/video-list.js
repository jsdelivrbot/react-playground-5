import React, {Component} from "react";

import VideoListItem from "./video-list-item";

class VideoList extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<ul className="col-md-6 list-group">
				{
					this.props.videos.map((video) => 
						<VideoListItem
							key={video.etag}
							video={video}
							onVideoSelected={this.props.onVideoSelected}
						/>
					)
				}
			</ul>
		);
	}
}

export default VideoList;
