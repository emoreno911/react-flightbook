import React from 'react';
import { Link } from 'react-router-dom';
import ControlPassengers from './ControlPassengers';
import ControlSelect from './ControlSelect';
import ControlRadio from './ControlRadio';
import ControlDate from './ControlDate';
import api from '../utils/api';


class Form extends React.Component {
	constructor(props) {
		super();
		this.state = {
		  airports: []
		};
	}

	componentDidMount() {
		//this.updateLanguage(this.state.selectedLanguage) //camelCase
		api.getAirportsList()
			.then(result => {
				this.setState({ airports: result });
			});
	}

	render() {
		//<Link className='btnSearch' to='/flights'>Search Flights</Link>
		const {from, to, date, passengers, fclass} = this.props.data;
		return (
		  <div className="content">
		    <div className="form">
		    	<ControlSelect 
		    		data={this.state.airports} 
		    		label="From" 
		    		placeholder="Your departure place"
					selected={from}
					onChange={(v) => this.props.onFormChanged('from', v)} 
		    	/>
		    	<ControlSelect
		    		data={this.state.airports} 
		    		label="To" 
		    		placeholder="Your destiny place" 
					selected={to}
					onChange={(v) => this.props.onFormChanged('to', v)}
		    	/>
		    	<ControlDate 
					selected={date}
					onChange={(v) => this.props.onFormChanged('date', v)} 
				/>
		    	<ControlPassengers 
					selected={passengers}
					onChange={(v) => this.props.onFormChanged('passengers', v)} 
				/>
		    	<ControlRadio 
					selected={fclass}
					onChange={(v) => this.props.onFormChanged('fclass', v)} 
				/>

		    	<div className="control">
						<Link className='btnSearch' to='/flights'>Search Flights</Link>
					</div>

		    </div>
		  </div>
		);
  	}
}

export default Form;