import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Secret from './components/Secret';
import { Router, Route, browserHistory} from 'react-router';
import './index.css';

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/secret" component={Secret}></Route>
  </Router>),
  document.getElementById('root')
);
