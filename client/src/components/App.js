import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions"; //take all the action creators and assign them to the object actions.

import Header from "./Header";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import Landing from "./Landing";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="surveys/new" exact component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
//now actions are assigned to the app component as props.
