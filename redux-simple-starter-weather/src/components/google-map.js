import React, { Component } from "react";

export default class GoogleMap extends Component {
	componentDidMount() {
		console.log("Lat: ", this.props.lat, " Lng: ", this.props.lng);
		
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lng
			}
		});
	}
	
	render() {
		return <div ref="map" />;
	}
}
