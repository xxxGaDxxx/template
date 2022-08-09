import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';

const Header = () => {
    return (
        <div>
            <div>
                <NavLink to={PATH.Counter_Settings}>Counter && Settings</NavLink>
            </div>
            <div>
                <NavLink to={PATH.Settings}>Settings</NavLink>
            </div>

        </div>
    );
};

export default Header;