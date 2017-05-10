import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Albums from './components/Albums';
import Photos from './components/Photos';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Albums} />
          <Route path="/photos/:id" component={Photos} />
      </Route>
  </Router>,
  document.getElementById('root')
);
