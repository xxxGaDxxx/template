import React from 'react';

type PropsType = {
    colBack: () => void
    figure: number
    title: string
    value: number
    /*    onClickInc: () => void
        onClickReset: () => void
        figure: number*/
}

const Button = (props: PropsType) => {

    const value = () => {
        return (
            props.figure === props.value
        )
    }


    return (
        <button className={'button'} disabled={value()} onClick={props.colBack}>{props.title}</button>
        /* <div >


             <button className={'button'} disabled={props.figure === 5} onClick={props.onClickInc}>inc</button>
             <button className={'button'} disabled={props.figure === 0} onClick={props.onClickReset}>reset</button>
         </div>*/
    );
};

export default Button;