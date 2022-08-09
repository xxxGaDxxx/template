import React from 'react';

type PropsType = {
    colBack?: () => void
    title: string
    incorrectInput?: string | null
    id?: number
    disabled?: boolean
}

const Button = (props: PropsType) => {

    return (
        <button className={'button'} disabled={props.disabled}
                onClick={props.colBack}>{props.title}</button>
    );
};

export default Button;