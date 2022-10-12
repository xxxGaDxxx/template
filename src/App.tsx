import React from 'react';

import { HashRouter } from 'react-router-dom';

import Header from './pages/Header';
import Pages from './pages/Pages';
import { ReturnComponentType } from './types';

const App = (): ReturnComponentType => {
  return (
    <div className={'App'}>
      <HashRouter>
        <Header />
        <Pages />
      </HashRouter>
    </div>
  );
};

export default App;
