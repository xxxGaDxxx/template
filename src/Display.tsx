import React from 'react';

type PropsType = {
    figure: number
}

const Display = (props: PropsType) => {
    return (
        <div className={props.figure === 5 ? 'frame red' : 'frame'}>
            <span>{props.figure}</span>
        </div>
    );
};

export default Display;