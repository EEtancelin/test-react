import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCharacterAction } from '../../reducers/character';
import CharacterType from './CharacterType.jsx';
import CharacterCardProperties from './CharacterCardProperties.jsx';

import './navbar.scss';

const Navbar = ({}) => (
  <div className="navbar-wagon navbar-wagon-fixed">
  <a href="/" className="navbar-wagon-brand">
    <img src="http://www.williammalone.com/articles/create-html5-canvas-javascript-game-character/images/character-color.png" />
  </a>

  <div className="navbar-wagon-right hidden-xs hidden-sm">

    <div></div>
  </div>
</div>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ deleteCharacterAction }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
