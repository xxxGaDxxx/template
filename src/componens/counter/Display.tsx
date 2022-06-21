import React from 'react';

type PropsType = {
    figure: number
    value: number
    error: string | null
    editMode: boolean
}


const Display = (props: PropsType) => {
    return (
        <div className={!!props.error || props.figure === props.value ? 'frame red' : 'frame'}>
            <span>{!!props.error ? props.error : props.editMode
                ? 'value set' : props.figure}
            </span>
        </div>
    );
};


export default Display;