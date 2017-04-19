import _ from "lodash";
import React, { Component } from "react";

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

export default class Chart extends Component {
	mean(data) {
		return _.round(_.sum(data) / data.length);
	}
	
	render() {
		return (
			<div>
				<Sparklines 
					height={120} 
					width={180}
					data={this.props.data}
				>
					<SparklinesLine color={this.props.colour} />
					<SparklinesReferenceLine type="mean" />
				</Sparklines>
				<div>
					{ this.mean(this.props.data) } {this.props.units}
				</div>
			</div>
		);
	}
}
