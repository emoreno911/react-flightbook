import React from 'react';

class ControlDate extends React.Component {
  render() {
    return (
		<div className="control dateinput">
			<div className="control-head">
				<i className="zmdi zmdi-calendar"></i>
				<span className="close"><i className="zmdi zmdi-close"></i></span>
				<div className="control-item">
					<h6>Depar</h6>
					<span>MON, 8 May</span>
				</div>
				<div className="control-item">
					<h6>Return</h6>
					<span>One Way</span>
				</div>
			</div>
			<div className="control-body">
				<div className="info-message">
					<i className="zmdi zmdi-info"></i>
					<span>By the moment theres only One Way tickets, thanks.</span>
				</div>
				<div className="calendar">
					<div className="month">
						<i className="zmdi zmdi-chevron-left"></i>
						<span>May</span>
						<i className="zmdi zmdi-chevron-right"></i>
					</div>
					<div className="week">
						<span>S</span>
						<span>M</span>
						<span>T</span>
						<span>W</span>
						<span>T</span>
						<span>F</span>
						<span>S</span>
					</div>
					<div className="days"></div>
				</div>
			</div>
		</div>
    )
  }
}

export default ControlDate;