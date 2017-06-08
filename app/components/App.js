import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import FlightList from './FlightList';
import Header from './Header';
import Form from './Form';
import Ticket from './Ticket';


function Headbar(props) {
  const canGoBack = location.pathname !== '/';
  return (
    <div className="headbar">
      {canGoBack && (<i onClick={props.onGoBack}
        className="zmdi zmdi-arrow-left btnBack">
      </i>)} 
      <span>Flight</span>
      <span className="blue">.Book</span>
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      from: 'DUB',
      to: 'HAM',
      date: Date.now(),
      passengers: {
        adults: 1,
        kids: 0,
        elders: 0
      },
      fclass: 'economy'
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(type, val) {
    this.setState({
      [type]: val
    });
  }

  handleGoBack() {
    history.back();
  }

  render() {
    return (
      <Router>
        <div className="wrap">
          <Headbar onGoBack={this.handleGoBack} />
          <Header from={this.state.from} to={this.state.to} />

          <Switch>
            <Route exact path="/" render={props => (
              <Form {...props} 
                    data={this.state} 
                    onFormChanged={this.handleFormChange} />
            )}/>
            <Route exact path="/flights" render={props => (
              <FlightList {...props} data={this.state} />
            )}/>
            <Route path="/ticket" component={Ticket} />
            <Route render={() => <div className="content"><h3>Not Found</h3></div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;