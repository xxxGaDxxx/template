import React, { ChangeEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  editModeAC,
  figureDisplayAC,
  incorrectInputAC,
  inputMaxAC,
  inputStartAC,
} from '../../../state/counter-reducer';
import { AppRootStateType } from '../../../state/store';
import { ReturnComponentType } from '../../../types';
import Button from '../../counter/Button';
import { CounterType } from '../Settings_1';

import Input from './Input';

type SettingsPropsType = {
  callbackSet?: () => void;
};

export const Settings = ({ callbackSet }: SettingsPropsType): ReturnComponentType => {
  let { inputStart, inputMax, incorrectInput } = useSelector<
    AppRootStateType,
    CounterType
  >(state => state.counterReducer);

  let dispatch = useDispatch();

  const onChangeInputStart = (e: ChangeEvent<HTMLInputElement>): void => {
    //стартовое значение приходит с инпута
    console.log(e.currentTarget.value);
    let startValue = parseInt(e.currentTarget.value, 10);

    dispatch(editModeAC(true));
    if (startValue <= -1) {
      dispatch(inputStartAC(-1));
      dispatch(incorrectInputAC('Incorrect value!'));
    } else if (startValue >= inputMax) {
      dispatch(inputStartAC(inputMax));
      dispatch(incorrectInputAC('Incorrect value!'));
    } else if (startValue >= 0) {
      dispatch(inputStartAC(startValue));
      dispatch(incorrectInputAC(null));
    }
  };

  const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>): void => {
    let maxValue = parseInt(e.currentTarget.value, 10);

    dispatch(editModeAC(true));
    if (maxValue <= -1) {
      dispatch(inputMaxAC(-1));
      dispatch(incorrectInputAC('Incorrect value!'));
    } else if (maxValue <= inputStart) {
      dispatch(inputMaxAC(inputStart));
      dispatch(incorrectInputAC('Incorrect value!'));
    } else if (maxValue >= 0) {
      dispatch(inputMaxAC(maxValue));
      dispatch(incorrectInputAC(null));
    }
  };

  const setOn = (): void => {
    callbackSet && callbackSet();

    dispatch(figureDisplayAC(inputStart));
    dispatch(incorrectInputAC(null));
    dispatch(editModeAC(false));
  };

  const setOff = (): void => {
    dispatch(incorrectInputAC('Incorrect value!'));
  };

  const onClickSet = (): void => {
    return inputMax >= 0 && inputStart >= 0 && inputMax > inputStart ? setOn() : setOff();
  };

  return (
    <div className={'settings_container'}>
      <div>
        <div>
          <Input title="max" onChangeInput={onChangeInputMax} value={inputMax} />
        </div>
        <div>
          <Input title="start" onChangeInput={onChangeInputStart} value={inputStart} />
        </div>
      </div>
      <Button colBack={onClickSet} title={'set'} disabled={!!incorrectInput} />
    </div>
  );
};
