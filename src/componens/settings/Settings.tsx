import React, {ChangeEvent} from 'react';
import Input from './Input';
import Button from '../counter/Button';

type SettingsType = {
    inputStart: number
    inputMax: number
    onChangeInputMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeInputStart: (e: ChangeEvent<HTMLInputElement>) => void
    onClickSet: () => void
    figure: number
    error: string | null
}

export const Settings = (props: SettingsType) => {

    return (
        <div className="App">
            <div className={'frame1'}>
                <div>
                    <Input title="max"
                           onChangeInput={props.onChangeInputMax}
                           value={props.inputMax}
                    />
                </div>
                <div>
                    <Input title="start"
                           onChangeInput={props.onChangeInputStart}
                           value={props.inputStart}
                    />
                </div>
            </div>
            <div className={'frame1'}>
                <Button colBack={props.onClickSet} title={'set'} disabled={!!props.error}/>
            </div>
        </div>
    );
};

