import React, {useState} from 'react';
import './App.css';
import Сounter from './Сounter';


function App() {

    const [figure, setFigure] = useState<number>(0)

    const onClickInc = () => {
        if (figure < incMax) {
            setFigure(figure + 1)
        }
    }
    const onClickReset = () => {
        setFigure(resetMin)
    }

    const incMax = 5
    const resetMin = 0

    return (
        <div className="App">
            <Сounter
                onClickInc={onClickInc}
                onClickReset={onClickReset}
                figure={figure}
                incMax={incMax}
                resetMin={resetMin}
            />
        </div>
    );
}

export default App;
