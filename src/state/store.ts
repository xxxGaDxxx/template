import {Action, AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import thunk, {ThunkAction} from 'redux-thunk';

const rootReducer = combineReducers({
    counterReducer: counterReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store