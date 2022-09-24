import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>

                <NavLink to={PATH.Counter_Settings} className={s.link}>Counter && Settings</NavLink>

                <NavLink to={PATH.Settings} className={s.link}>Settings</NavLink>


        </div>
    );
};

export default Header;