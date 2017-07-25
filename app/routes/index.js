import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { App, Home, Character } from '../pages';

export default store => {

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='character' component={Character}/>
      <Route path='character/:index' component={Character} />
      <Redirect from="*" to="/" />
    </Route>
  );
};
