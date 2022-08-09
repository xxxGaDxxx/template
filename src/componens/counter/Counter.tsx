import React from 'react';
import Button from './Button';
import Display from './Display';
import { CounterType} from '../../App';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {figureDisplayAC} from '../../state/counter-reducer';


type CounterPropsType = {
    set?: boolean
    callbackSet?: () => void
}


export const Counter = ({set,callbackSet}:CounterPropsType) => {

    const dispatch = useDispatch();

    let {
        figure,
        inputStart,
        inputMax,
        incorrectInput,
        editMode,
        buttonClick
    } = useSelector<AppRootStateType, CounterType>(state => state.counterReducer)

    const onClickInc = () => {
        if (figure < inputMax) {
            dispatch(figureDisplayAC(figure + 1))
        }
    }

    const onClickReset = () => {
        dispatch(figureDisplayAC(inputStart))
    }

    return (
        <div className="App">
            <div>
                <Display/>
            </div>

            <div className={'frame1'}>
                {
                    buttonClick.map(e => {

                        let value = () => {
                            return editMode
                                ? true
                                : e.id === 1
                                    ? inputMax <= inputStart || inputMax === figure
                                    : inputMax <= inputStart
                        }

                        const colBackHandler = () => {
                            if (e.id === 1) {
                                onClickInc()
                            }
                            if (e.id === 2) {
                                onClickReset()
                            }
                        }

                        return (
                            <Button
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                colBack={colBackHandler}
                                incorrectInput={incorrectInput}
                                disabled={value()}
                            />
                        )
                    })
                }
                {set &&<Button colBack={callbackSet} title={'set'}/>}
            </div>
        </div>
    );
};

