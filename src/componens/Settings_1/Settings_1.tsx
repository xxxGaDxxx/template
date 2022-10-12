import React, { useEffect } from 'react';

import './Settings_1.css';
import { useDispatch, useSelector } from 'react-redux';

import { figureDisplayAC, inputMaxAC, inputStartAC } from '../../state/counter-reducer';
import { AppRootStateType } from '../../state/store';
import { ReturnComponentType } from '../../types';
import { Counter } from '../counter/Counter';

import { Settings } from './settings/Settings';

export type CounterType = {
  figure: number;
  inputStart: number;
  inputMax: number;
  incorrectInput: string | null;
  editMode: boolean;
  buttonClick: ButtonClickType[];
};

export type ButtonClickType = {
  id: number;
  title: string;
};

export const Settings_1 = (): ReturnComponentType => {
  let dispatch = useDispatch();

  let valueAsStart = useSelector<AppRootStateType, number>(
    state => state.counterReducer.inputStart,
  );
  let valueAsMax = useSelector<AppRootStateType, number>(
    state => state.counterReducer.inputMax,
  );

  useEffect(() => {
    dispatch(figureDisplayAC(valueAsStart));
    dispatch(inputStartAC(valueAsStart));
    dispatch(inputMaxAC(valueAsMax));
  }, [dispatch, valueAsStart, valueAsMax]);

  return (
    <div>
      <div className={'display'}>
        <Settings />
        <Counter />
      </div>
    </div>
  );
};
