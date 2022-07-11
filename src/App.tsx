import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './componens/counter/Counter';
import {Settings} from './componens/settings/Settings';
import {useDispatch} from 'react-redux';
import { figureDisplayAC, inputMaxAC, inputStartAC} from './state/counter-reducer';

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

    useEffect(() => {
        let valueAsMax = localStorage.getItem('counterMax')
        let valueAsStart = localStorage.getItem('counterStart')
        console.log(valueAsMax)
        if (valueAsMax && valueAsStart) {
            dispatch(figureDisplayAC(JSON.parse(valueAsStart)))
            dispatch(inputStartAC(JSON.parse(valueAsStart)))
            dispatch(inputMaxAC(JSON.parse(valueAsMax)))
        }
    }, [])

    return (
        <div className={'display'}>
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
