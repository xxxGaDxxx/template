import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Settings_1 } from '../componens/Settings_1/Settings_1';
import { Settings_2 } from '../componens/settings_2/Settings_2';
import { ReturnComponentType } from '../types';

export const PATH = {
  Counter_Settings: '/counter_settings',
  Settings: '/settings',
};

const Pages = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path={PATH.Counter_Settings} element={<Settings_1 />} />
        <Route path={PATH.Settings} element={<Settings_2 />} />
      </Routes>
    </div>
  );
};

export default Pages;
