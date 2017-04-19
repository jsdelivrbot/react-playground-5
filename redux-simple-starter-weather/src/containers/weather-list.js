import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/chart";
import GoogleMap from "../components/google-map";

class WeatherList extends Component {
	renderListItem(data) {
		const name = data.city.name;
		const temps = data.list.map(readings => readings.main.temp);
		const pressures = data.list.map(readings => readings.main.pressure);
		const humidities = data.list.map(readings => readings.main.humidty);
		const { lon, lat } = data.city.coord;
		
		return (
			<tr key={name}>
				<td><GoogleMap lng={lon} lat={lat} /></td>
				<td><Chart data={temps} colour="orange" units="K" /></td>
				<td><Chart data={pressures} colour="green" units="hPa" /></td>
				<td><Chart data={humidities} colour="blue" units="%" /></td>
			</tr>
		);
	}
	
	render() {
		return (
			<table className="table table-hover table-condensed">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidty (%)</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.weather.map(this.renderListItem)
					}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
