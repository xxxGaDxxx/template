import React, { useState } from 'react';

import { ReturnComponentType } from '../../types';
import { Counter } from '../counter/Counter';
import { Settings } from '../Settings_1/settings/Settings';

import s from './Settings_2.module.css';

export const Settings_2 = (): ReturnComponentType => {
  let [set, setSet] = useState(false);

  let callbackSet = (): void => {
    setSet(!set);
  };

  return (
    <div className={s.settings2_bloc}>
      {set ? (
        <Counter set={set} callbackSet={callbackSet} />
      ) : (
        <Settings callbackSet={callbackSet} />
      )}
    </div>
  );
};
