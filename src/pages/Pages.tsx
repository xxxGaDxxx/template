import React from 'react';
import { Route, Routes} from 'react-router-dom';
import App from '../App';

import {Settings_2} from '../componens/settings_2/Settings_2';

export const PATH={
    Counter_Settings:'/counter_settings',
    Settings:'/settings',
}

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.Counter_Settings} element={<App/>}/>
                <Route path={PATH.Settings} element={<Settings_2/>}/>
            </Routes>
        </div>
    );
};

export default Pages;