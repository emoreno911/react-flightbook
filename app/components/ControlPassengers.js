import React from 'react';

class ControlPassengers extends React.Component {
  render() {
    return (
		<div className="control radio passengers">
			<i className="zmdi zmdi-accounts"></i>
			<div className="control-item">
				<h6>Passengers</h6>
				<label>
					<input type="radio" name="passengers" value="0" checked="checked"/>
					<div><span>1</span>&times;<i className="zmdi zmdi-male-alt"></i><small>Adults</small></div>
				</label>
				<label>
					<input type="radio" name="passengers" value="1"/>
					<div><span>0</span>&times;<i className="zmdi zmdi-face"></i><small>Kids</small></div>
				</label>
				<label>
					<input type="radio" name="passengers" value="2"/>
					<div><span>0</span>&times;<i className="zmdi zmdi-walk"></i><small>Elders</small></div>
				</label>
			</div>
			<section className="spinner">
				<button data-action="plus"><i className="zmdi zmdi-plus"></i></button>
				<button data-action="minus"><i className="zmdi zmdi-minus"></i></button>
			</section>
		</div>
    )
  }
}

export default ControlPassengers;