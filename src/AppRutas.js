import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from "./components/inicio";

class Routa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: ""
    };
  }

  // componentDidMount;

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => <Inicio {...props} />} />
          {/* <Route path="/:user" render={props => <Home {...props} />} /> */}
        </div>
      </Router>
    );
  }
}

export default Routa;
