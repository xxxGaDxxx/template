import React, { useState} from 'react';

import {Counter} from '../counter/Counter';
import {Settings} from '../settings/Settings';


export const Settings_2 = () => {

    let [set,setSet]=useState(false)

    let callbackSet = ()=>{
        setSet(!set)
    }

    return (
        <div>
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



