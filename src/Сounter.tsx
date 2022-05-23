import React from 'react';
import Button from './Button';
import Display from './Display';

export type PropsType = {
    onClickInc: () => void
    onClickReset: () => void
    figure: number
    resetMin: number
    incMax: number

}


const Сounter = (props: PropsType) => {


    return (
        <div>
            <div>
                <Display figure={props.figure}/>
            </div>
            <div className={'frame1'}>
                <Button
                    title="inc"
                    colBack={props.onClickInc}
                    figure={props.figure}
                    value={props.incMax}
                />
                <Button
                    title="reset"
                    colBack={props.onClickReset}
                    figure={props.figure}
                    value={props.resetMin}
                />
                {/* <Button
                    onClickInc={props.onClickInc}
                    onClickReset={props.onClickReset}
                    figure={props.figure}
                />*/}
            </div>
        </div>
    );
};

export default Сounter;