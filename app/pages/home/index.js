import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from '../shared/Navbar.jsx';
import Table from '../shared/Table.jsx';
import { deleteCharacterAction } from '../../reducers/character';

import './home.scss';


const rHeader = ['name', 'username','email']
const rUser = [{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  }
]

const Home = ({ characters, properties, actions }) => (
  <div >
    <Navbar/>
    <div className="wrapper">
      <Table header={rHeader} elements={rUser} />
    </div>
  </div>
);

export default Home;
