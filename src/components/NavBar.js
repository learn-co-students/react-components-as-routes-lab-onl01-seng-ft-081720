import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink
          to="/"
          exact
          activeStyle={{
            background: 'pink'
          }}
        >Home   -</NavLink>
        <NavLink
          to="/movies"
          exact
          activeStyle={{
            background: 'pink'
          }}
        > Movies   -</NavLink>
        <NavLink
          to="/directors"
          exact

          activeStyle={{
            background: 'pink'
          }}
        >Directors   -</NavLink>
        <NavLink
          to="/actors"
          exact

          activeStyle={{
            background: 'pink'
          }}
        > Actors   </NavLink>
    </div>
  );
};

export default NavBar;
