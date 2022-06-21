import React from 'react';
import Button from './Button';
import Display from './Display';
import {ButtonClickType} from '../../App';

export type PropsType = {
    onClickInc: () => void
    onClickReset: () => void
    figure: number
    inputMax: number
    error: string | null
    buttonClick: ButtonClickType[]
    inputStart: number
    editMode: boolean
}


export const Counter = (props: PropsType) => {


    return (
        <div className="App">
            <div>
                <Display
                    figure={props.figure}
                    value={props.inputMax}
                    error={props.error}
                    editMode={props.editMode}
                />
            </div>

            <div className={'frame1'}>
                {
                    props.buttonClick.map(e => {

                        let value = () => {
                            return props.editMode
                                ? true
                                : e.id === 1
                                    ? props.inputMax <= props.inputStart || props.inputMax === props.figure
                                    : props.inputMax <= props.inputStart
                        }

                        const colBackHandler = () => {
                            if (e.id === 1) {
                                props.onClickInc()
                            }
                            if (e.id === 2) {
                                props.onClickReset()
                            }
                        }


                        return (
                            <Button
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                colBack={colBackHandler}
                                error={props.error}
                                disabled={value()}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

