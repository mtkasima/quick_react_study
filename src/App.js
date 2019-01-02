import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MyArticle from './MyArticle';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/article/1">記事No.1</Link></li>
            <li><Link to="/article/10">記事No.10</Link></li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/article/:id" component={MyArticle}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
