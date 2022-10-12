import React from 'react';

import { ReturnComponentType } from '../../types';

import s from './Button.module.css';

type PropsType = {
  colBack?: () => void;
  title: string;
  incorrectInput?: string | null;
  id?: number;
  disabled?: boolean;
};

const Button = (props: PropsType): ReturnComponentType => {
  return (
    <button className={s.btn} disabled={props.disabled} onClick={props.colBack}>
      {props.title}
    </button>
  );
};

export default Button;
