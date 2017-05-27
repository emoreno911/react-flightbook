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
  return (
    <div className="headbar">
      <i className="zmdi zmdi-arrow-left btnBack"></i> 
      <span>Flight</span>
      <span className="blue">.Book</span>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrap">
          <Headbar />

          <Header />

          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/flights" component={FlightList} />
            <Route path="/ticket" component={Ticket} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;