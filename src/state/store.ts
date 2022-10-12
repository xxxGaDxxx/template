// eslint-disable-next-line import/named
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
// eslint-disable-next-line import/named
import thunk, { ThunkAction } from 'redux-thunk';

import { loadState, saveState } from '../utils/localStorage';

import { counterReducer } from './counter-reducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
  saveState({
    counterReducer: store.getState().counterReducer,
  });
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AnyAction
>;

// @ts-ignore
window.store = store;
