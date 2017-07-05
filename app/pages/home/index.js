import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCharacterAction } from '../../reducers/character';

import './home.scss';

const Home = ({ characters, properties, actions }) => (
  <div className="home">
    <div className="button" onClick={() => browserHistory.push(`/character`)}>Add a character</div>
    <div className="characters">
      <div className="characters__item characters__item--head">
        {properties.map((property, i) => (
          <div key={i} className="characters__property">{property.label}</div>
        ))}
        <div className="characters__property characters__property--button">Edit</div>
        <div className="characters__property characters__property--button">Delete</div>
      </div>
      {characters.map((character, i) => (
        <div key={i} className="characters__item">
          {properties.map((property, j) => (
            <div key={j}className="characters__property">{character[property.key]}</div>
          ))}
          <div className="characters__property button" onClick={() => browserHistory.push(`/character/${i}`)}>Edit</div>
          <div className="characters__property button button--red" onClick={() => actions.deleteCharacterAction(i)}>Delete</div>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  characters: state.character.characters,
  properties: state.character.properties
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ deleteCharacterAction }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);