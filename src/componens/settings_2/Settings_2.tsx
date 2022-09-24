import React, { useState} from 'react';
import s from './Settings_2.module.css'

import {Counter} from '../counter/Counter';
import {Settings} from '../settings/Settings';


export const Settings_2 = () => {

    let [set,setSet]=useState(false)

    let callbackSet = ()=>{
        setSet(!set)
    }

    return (
        <div className={s.settings2_bloc}>
            {set
                ? <Counter
                    set={set}
                    callbackSet={callbackSet}
                />
            : <Settings
                    callbackSet={callbackSet}
                />}
        </div>
    )
}



