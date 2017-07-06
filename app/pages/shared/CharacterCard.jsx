import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCharacterAction } from '../../reducers/character';

import '../home/home.scss';

const CharacterCard = ({ }) => (
      <div className="character">
      <div className="character-body">
        <div className='character-name'>
          John Doe
        </div>
        <div className='properties'>
          <div className='property-name'>
            Plant
            <img src='https://www.iconexperience.com/_img/g_collection_png/standard/512x512/plant.png'/>
          </div>
          <div className='property'>
            <div className='property-name'>
              Birth:
            </div>
            <div className='property-value'>
              15/06/2013
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
