import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputType = {
    title: string
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}

const Input = (props: InputType) => {
    return (
        <div className={s.input}>
            <span>{props.title}</span>
            <input type={'number'} value={props.value} onChange={props.onChangeInput}/>
        </div>
    );
};

export default Input;