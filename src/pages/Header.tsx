import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../types';

import s from './Header.module.css';
import { PATH } from './Pages';

const Header = (): ReturnComponentType => {
  return (
    <div className={s.header}>
      <NavLink to={PATH.Counter_Settings} className={s.link}>
        Counter && Settings
      </NavLink>

      <NavLink to={PATH.Settings} className={s.link}>
        Settings
      </NavLink>
    </div>
  );
};

export default Header;
