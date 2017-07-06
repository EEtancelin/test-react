import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCharacterAction } from '../../reducers/character';
import CharacterType from './CharacterType.jsx';
import CharacterCardProperties from './CharacterCardProperties.jsx';

import '../home/home.scss';

const CharacterCard = ({ character, id , actions }) => (
  <div className="characterCard equalHW">
    <div className="character-body">
      <div className='character-name'>
        {console.log(character)}
        {character.lastName + " " +character.firstName}
      </div>
      <CharacterType type={character.type}/>
      <div className='properties'>
          {Object.keys(character).map( function(s){
            if ( s !=='firstName' && s !=='lastName' && s !=='type') {
              return <CharacterCardProperties property={s} value={character[s]} />
            }
          })}
      </div>
      <div className='footer'>
        <div className='footer-item'>
          <div className="characters__property button" onClick={() => browserHistory.push(`/character/${id}`)}>Edit</div>
        </div>
        <div className='footer-item'>
          <div className="characters__property button button--red" onClick={() => actions.deleteCharacterAction(id)}>Delete</div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ deleteCharacterAction }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);
