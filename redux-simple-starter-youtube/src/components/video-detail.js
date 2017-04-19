import React, {Component} from "react";

class VideoDetail extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		if(!this.props.video) return <div>Loading...</div>;
		
		return (
			<div className="video-detail col-md-6">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe 
						className="embed-responsive-item"
						src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
					>
					</iframe>
				</div>
				<div className="details">
					<div>{this.props.video.snippet.title}</div>
					<div>{this.props.video.snippet.description}</div>
				</div>
			</div>
		);
	}
}


export default VideoDetail;
