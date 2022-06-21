import React, {ChangeEvent} from 'react';

type InputType = {
    title: string
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}

const Input = (props: InputType) => {
    return (
        <div>
            <span>{props.title}</span>
            <input type={'number'} value={props.value} onChange={props.onChangeInput}/>
        </div>
    );
};

export default Input;