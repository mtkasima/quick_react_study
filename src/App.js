import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MyCheckMulti from './MyCheckMulti';
import MySelect from './MySelect';
import MyTextarea from './MyTextarea';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">MyCheckMulti</Link></li>
            <li><Link to="/select">MySelect</Link></li>
            <li><Link to="/textarea">MyTextarea</Link></li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/" component={MyCheckMulti}/>
            <Route path="/select" component={MySelect}/>
            <Route path="/textarea" component={MyTextarea}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
