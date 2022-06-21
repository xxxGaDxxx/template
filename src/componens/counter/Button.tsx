import React, {MouseEvent} from 'react';

type PropsType = {
    colBack: (e: MouseEvent<HTMLButtonElement>) => void
    title: string
    error?: string | null
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