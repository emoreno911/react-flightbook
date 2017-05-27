import React from 'react';


class ControlSelect extends React.Component {
  render() {
  	const airports = this.props.data;
  	const airportsRender = _.map(airports, (countryOpts, countryName) => {
		let firstLeter = countryName.split('')[0],
			arr = [];

		arr.push(<li className="sep" data-index={firstLeter}>{countryName}</li>);

		countryOpts.forEach((airport, i) => {
			arr.push(<li data-iata={airport.IATA} data-city={airport.city}>{airport.IATA}, {airport.name}</li>);
		});

		return arr;
	});

    return (
		<div className="control select">
			<div className="control-head">
				<i className="zmdi zmdi-flight-takeoff"></i>
				<span className="close"><i className="zmdi zmdi-close"></i></span>
				<div>
					<h6>{this.props.label}</h6>
					<span className="airport-name" data-role="from">{this.props.text}</span>
				</div>			
			</div>
			<div className="control-body">
				<ul className="select-index"></ul>
				<div className="nano">
				    <div className="nano-content">
				    	<ul className="select-data">
				    		{airportsRender}
				    	</ul>
				    </div>
				</div>
			</div>
		</div>
    )
  }
}

export default ControlSelect;