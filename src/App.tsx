import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './componens/counter/Counter';
import {Settings} from './componens/settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {figureDisplayAC, inputMaxAC, inputStartAC} from './state/counter-reducer';



export type CounterType = {
    figure: number
    inputStart: number
    inputMax: number
    incorrectInput: string | null
    editMode: boolean
    buttonClick: ButtonClickType[]
}

export type ButtonClickType = {
    id: number
    title: string
}

function App() {

    let dispatch = useDispatch()

    let valueAsStart = useSelector<AppRootStateType,number>(state => state.counterReducer.inputStart)
    let valueAsMax = useSelector<AppRootStateType,number>(state => state.counterReducer.inputMax)

    useEffect(()=>{
        dispatch(figureDisplayAC(valueAsStart))
        dispatch(inputStartAC(valueAsStart))
        dispatch(inputMaxAC(valueAsMax))
    },[])

    return (
        <div className={'display'}>
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
