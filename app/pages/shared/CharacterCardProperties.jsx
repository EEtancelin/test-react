import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCharacterAction } from '../../reducers/character';
import CharacterType from './CharacterType.jsx';

import '../home/home.scss';

const CharacterCardProperties = ({ property, value }) => (
  <div className='property'>
    <div className='property-name'>
      {property.replace(/([A-Z])/g, ' $1').toLowerCase().trim()+":"}
    </div>
    <div className='property-value'>
      {value}
    </div>
  </div>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardProperties);
