import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {CounterType} from '../../App';

const Display = () => {

    let {
        figure,
        inputMax,
        incorrectInput,
        editMode,
    } = useSelector<AppRootStateType, CounterType>(state => state.counterReducer)

    return (
        <div className={!!incorrectInput || figure === inputMax ? 'frame red' : 'frame'}>
            <span>{!!incorrectInput ? incorrectInput : editMode
                ? 'value set' : figure}
            </span>
        </div>
    );
};

export default Display;