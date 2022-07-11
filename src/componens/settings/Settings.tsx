import React, {ChangeEvent} from 'react';
import Input from './Input';
import Button from '../counter/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {CounterType} from '../../App';
import {editModeAC, figureDisplayAC, incorrectInputAC, inputMaxAC, inputStartAC} from '../../state/counter-reducer';


export const Settings = () => {

    let {
        inputStart,
        inputMax,
        incorrectInput,
    } = useSelector<AppRootStateType, CounterType>(state => state.counterReducer)

    let dispatch = useDispatch()


    const onChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {//стартовое значение приходит с инпута
        console.log(e.currentTarget.value)
        let startValue = parseInt(e.currentTarget.value, 10)
        dispatch(editModeAC(true))
        if (startValue <= -1) {
            dispatch(inputStartAC(-1))
            dispatch(incorrectInputAC('Incorrect value!'))
        } else if (startValue >= inputMax) {
            dispatch(inputStartAC(inputMax))
            dispatch(incorrectInputAC('Incorrect value!'))
        } else if (startValue >= 0) {
            dispatch(inputStartAC(startValue))
            dispatch(incorrectInputAC(null))
        }
    }

    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = parseInt(e.currentTarget.value, 10)
        dispatch(editModeAC(true))
        if (maxValue <= -1) {
            dispatch(inputMaxAC(-1))
            dispatch(incorrectInputAC('Incorrect value!'))
        } else if (maxValue <= inputStart) {
            dispatch(inputMaxAC(inputStart))
            dispatch(incorrectInputAC('Incorrect value!'))
        } else if (maxValue >= 0) {
            dispatch(inputMaxAC(maxValue))
            dispatch(incorrectInputAC(null))
        }
    }

    const setOn = () => {
        dispatch(figureDisplayAC(inputStart))
        dispatch(incorrectInputAC(null))
        dispatch(editModeAC(false))
        localStorage.setItem('counterMax', JSON.stringify(inputMax))
        localStorage.setItem('counterStart', JSON.stringify(inputStart))
    }

    const setOff = () => {

        dispatch(incorrectInputAC('Incorrect value!'))
    }

    const onClickSet = () => {
        return inputMax >= 0 && inputStart >= 0 && inputMax > inputStart
            ? setOn()
            : setOff()
    }

    return (
        <div className="App">
            <div className={'frame1'}>
                <div>
                    <Input title="max"
                           onChangeInput={onChangeInputMax}
                           value={inputMax}
                    />
                </div>
                <div>
                    <Input title="start"
                           onChangeInput={onChangeInputStart}
                           value={inputStart}
                    />
                </div>
            </div>
            <div className={'frame1'}>
                <Button colBack={onClickSet} title={'set'} disabled={!!incorrectInput}/>
            </div>
        </div>
    );
};

