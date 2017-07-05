import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { App, Home, Character } from '../pages';
import { getCharacterAction } from '../reducers/character';

export default store => {
  const onCharacterEnter = (nextState, replace) => {
    getCharacterAction(nextState.params.index)(store.dispatch)
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='character' component={Character}/>
      <Route path='character/:index' component={Character} onEnter={onCharacterEnter}/>
      <Redirect from="*" to="/" />
    </Route>
  );
};
