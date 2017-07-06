import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CharacterCard from '../shared/CharacterCard.jsx';
import { deleteCharacterAction } from '../../reducers/character';

import './home.scss';

const Home = ({ characters, properties, actions }) => (
  <div className="home">
    <div className="button" onClick={() => browserHistory.push(`/character`)}>Add a character</div>
    <div className="characters">
      {characters.map((character, i) => (
        <div key={i} className="characters__item">
            <CharacterCard character={character} id={i} action={actions}/>
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
