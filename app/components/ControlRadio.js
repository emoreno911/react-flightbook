import React from 'react';

class ControlRadio extends React.Component {
  render() {
    return (
		<div className="control radio">
			<i className="zmdi zmdi-airline-seat-recline-extra"></i>
			<div className="control-item">
				<h6 style={{marginBottom: '8px'}}>Class</h6>
				<label>
					<input type="radio" name="seat" value="Economy" checked="checked" />
					<span>Economy</span>
				</label>
				<label>
					<input type="radio" name="seat" value="Business" />
					<span>Business</span>
				</label>
				<label>
					<input type="radio" name="seat" value="First xClass" />
					<span>First Class</span>
				</label>
			</div>
		</div>
    )
  }
}

export default ControlRadio;