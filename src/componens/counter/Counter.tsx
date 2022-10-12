import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { figureDisplayAC } from '../../state/counter-reducer';
import { AppRootStateType } from '../../state/store';
import { ReturnComponentType } from '../../types';
import { ButtonClickType, CounterType } from '../Settings_1/Settings_1';

import Button from './Button';
import Display from './Display';

type CounterPropsType = {
  set?: boolean;
  callbackSet?: () => void;
};

export const Counter = ({ set, callbackSet }: CounterPropsType): ReturnComponentType => {
  const dispatch = useDispatch();

  let { figure, inputStart, inputMax, incorrectInput, editMode, buttonClick } =
    useSelector<AppRootStateType, CounterType>(state => state.counterReducer);

  const onClickInc = (): void => {
    if (figure < inputMax) {
      dispatch(figureDisplayAC(figure + 1));
    }
  };

  const onClickReset = (): void => {
    dispatch(figureDisplayAC(inputStart));
  };
  const idButtonReset: number = 2;

  return (
    <div className="settings_container">
      <div>
        <Display />
      </div>

      <div>
        {buttonClick.map((e: ButtonClickType) => {
          let value = (): boolean => {
            return editMode
              ? true
              : e.id === 1
              ? inputMax <= inputStart || inputMax === figure
              : inputMax <= inputStart;
          };

          const colBackHandler = (): void => {
            if (e.id === 1) {
              onClickInc();
            }
            if (e.id === idButtonReset) {
              onClickReset();
            }
          };

          return (
            <Button
              key={e.id}
              id={e.id}
              title={e.title}
              colBack={colBackHandler}
              incorrectInput={incorrectInput}
              disabled={value()}
            />
          );
        })}
        {set && <Button colBack={callbackSet} title={'set'} />}
      </div>
    </div>
  );
};
