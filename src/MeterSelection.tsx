import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './pages/Header';
import Pages from './pages/Pages';


const MeterSelection = () => {

    return (
        <div>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    );
};

export default MeterSelection;