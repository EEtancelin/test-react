import React from 'react';

import './table.scss';

const Table = ({header, elements}) =>(
  <div>
    <div className="space-around">
      {header.map(headername => (
        <div key={headername} >{headername}</div>
      ))}
    </div>
    <div className="table-body">
      {elements.map(user => (
        <div className="space-around" key={user.id}>
          <div>{user.name}</div>
          <div>{user.username}</div>
          <div>{user.email}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Table;
