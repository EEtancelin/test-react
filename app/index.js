import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './styles/main.scss';
import routes from './routes';

// Sorry for this raw function do not know why the import doesnt work.
const URL = "https://jsonplaceholder.typicode.com/users" ;

const getJsonSource = () => {
  fetch(URL).then(
   function(response){
     return response.json();
  }
);
}

export default getJsonSource;


console.log(getJsonSource);
console.log(getJsonSource());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes(store)}
    </Router>
  </Provider>,
  document.getElementById('render-app')
);
