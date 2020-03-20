import { createReducer, on, Action } from '@ngrx/store';
import { initialState, AppState } from './app.state';

const _appReducer = createReducer(
    initialState
)

export function appReducer(state:AppState, action:Action){
    return _appReducer(state, action)
}