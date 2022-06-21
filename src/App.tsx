import React, {ChangeEvent, useState, useEffect} from 'react';
import './App.css';
import {Counter} from './componens/counter/Counter';
import {Settings} from './componens/settings/Settings';


export type ButtonClickType = {
    id: number
    title: string
}

function App() {
    //Display
    const [figure, setFigure] = useState<number>(0)
    console.log(figure)

    const onClickInc = () => {
        if (figure < inputMax) {
            setFigure(figure + 1)
        }
    }
    const onClickReset = () => {
        setFigure(inputStart)
    }


    ///SETTINGS
    const [inputStart, setInputStart] = useState<number>(0)
    const [inputMax, setInputMax] = useState<number>(0)
    const [error, setError] = useState<string | null>(null)
    console.log(inputStart)
    console.log(inputMax)

    const [editMode, setEditMode] = useState<boolean>(false)

    //Button
    const [buttonClick] = useState<ButtonClickType[]>([
        {id: 1, title: 'inc'},
        {id: 2, title: 'reset'},
    ])


    useEffect(() => {
        let valueAsMax = localStorage.getItem('counterMax')
        let valueAsStart = localStorage.getItem('counterStart')

        if (valueAsMax && valueAsStart) {
            setInputMax(JSON.parse(valueAsMax))
            setInputStart(JSON.parse(valueAsStart))
            setFigure(JSON.parse(valueAsStart))
        }
    }, [])



    const onChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {//стартовое значение приходит с инпута
        console.log(e.currentTarget.value)
        let startValue = Math.floor(parseInt(e.currentTarget.value,10))
        setEditMode(true)
        if (startValue >= 0) {
            setInputStart(startValue)
            setError(null)
        }else if (startValue === -1) {
            setInputStart(startValue)
            setError('Incorrect value!')
        }else if (startValue >= inputMax) {
            setInputStart(inputMax)
            setError('Incorrect value!')
        }

    }
    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {//максимальное значение приходит с инпута
        let maxValue = parseInt(e.currentTarget.value,10)
        setEditMode(true)
        if (maxValue >= 0) {
            setInputMax(maxValue)
            setError(null)
        }else if (maxValue === -1) {
            setInputMax(maxValue)
            setError('Incorrect value!')
        }else if (maxValue <= inputStart) {
            setInputMax(inputStart)
            setError('Incorrect value!')
        }
    }

    const setOn = () => {
        setFigure(inputStart)
        setError(null)
        setEditMode(false)
        localStorage.setItem('counterMax', JSON.stringify(inputMax))
        localStorage.setItem('counterStart', JSON.stringify(inputStart))
    }

    const setOff = () => {
        setError('Incorrect value!')
    }

    //сетаем в фигуру
    const onClickSet = () => {
        return inputMax >= 0 && inputStart >= 0 && inputMax > inputStart
            ? setOn()
            : setOff()
    }


    return (
        <div className={'display'}>
            <Settings
                inputStart={inputStart}
                inputMax={inputMax}
                onChangeInputMax={onChangeInputMax}
                onChangeInputStart={onChangeInputStart}
                onClickSet={onClickSet}
                figure={figure}
                error={error}
            />
            <Counter
                onClickInc={onClickInc}
                onClickReset={onClickReset}
                figure={figure}
                inputMax={inputMax}
                error={error}
                inputStart={inputStart}
                buttonClick={buttonClick}
                editMode={editMode}
            />
        </div>
    );
}

export default App;
