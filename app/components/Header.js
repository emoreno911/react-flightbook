import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className="bg"></div>
		<div className="filter"></div>
		<div className="title">
			<div className="fromPlace">
				<span>D</span><span>U</span><span>B</span>
			</div>
			<span className="separator"><i className="zmdi zmdi-airplane"></i></span>
			<div className="toPlace">
				<span>M</span><span>R</span><span>S</span>
			</div>
		</div>
		<div className="map"></div>
      </div>
    )
  }
}

export default Header;