import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCharacterAction } from '../../reducers/character';

import '../home/home.scss';

const CharacterType = ({ type }) => (
  <div className='property'>
    <div className='property-name'>
      {type}
      {type === 'plant' &&
        <img src='https://www.iconexperience.com/_img/g_collection_png/standard/512x512/plant.png'/>
      }
      {type === 'animal' &&
        <img src='https://image.freepik.com/icones-gratuites/forme-d-39-empreinte-de-patte-animale_318-30445.jpg'/>
      }
      {type === 'human' &&
        <img src='http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png'/>
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterType);
