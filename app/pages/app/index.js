import React, { PropTypes } from 'react';

import './app.scss';

const App = ({ children }) => (
  <div className="app">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
