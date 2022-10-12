import React from 'react';

import { useSelector } from 'react-redux';

import { AppRootStateType } from '../../state/store';
import { ReturnComponentType } from '../../types';
import { CounterType } from '../Settings_1/Settings_1';

const Display = (): ReturnComponentType => {
  let { figure, inputMax, incorrectInput, editMode } = useSelector<
    AppRootStateType,
    CounterType
  >(state => state.counterReducer);

  let incorrectValueSet = (): number | string => {
    if (!incorrectInput) {
      if (editMode) {
        return 'value set';
      }

      return figure;
    }

    return incorrectInput;
  };

  return (
    <div className={!!incorrectInput || figure === inputMax ? 'frame red' : 'frame'}>
      <span>{incorrectValueSet()}</span>
    </div>
  );
};

export default Display;
