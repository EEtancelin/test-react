import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCharacterAction } from '../../reducers/character';
import CharacterType from './CharacterType.jsx';

import '../home/home.scss';

const CharacterCard = ({ character }) => (
      <div className="character">
      <div className="character-body">
        <div className='character-name'>
          {console.log(character)}
          {character.lastName + " " +character.firstName}
        </div>
        <div className='properties'>
          <CharacterType type={character.type}/>
          <div className='property'>
            <div className='property-name'>
              Birth:
            </div>
            <div className='property-value'>
              {character.birthDate}
            </div>
          </div>
                </div>
          <div className='footer'>
            <div className='footer-item'>
              <div className="characters__property button" onClick={() => browserHistory.push(`/character/${i}`)}>Edit</div>
            </div>
            <div className='footer-item'>
              <div className="characters__property button button--red" onClick={() => actions.deleteCharacterAction(i)}>Delete</div>
            </div>
          </div>
        </div>
      </div>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);
