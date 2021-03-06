import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import MyArticle from './MyArticle';

export default class App extends Component {
  render() {
    const current = { color: 'Red' };
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink to="/article/1" activeStyle={current}>記事No.1</NavLink></li>
            <li><NavLink to="/article/10" activeStyle={current}>記事No.10</NavLink></li>
          </ul>
          <hr/>
          <Route path="/article/:id" component={MyArticle}/>
        </div>
      </Router>
    );
  }
}
