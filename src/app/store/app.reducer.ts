import { createReducer, on, Action } from '@ngrx/store';
import { initialState, AppState } from './app.state';
import { toggleSidebar, toggleWeekPickerDialog, changeSelectedWeek, changeSelectedWeekByMonth, setSelectedWeek } from './app.actions';
import { changeWeek, changeMonth } from '../utils';

const _appReducer = createReducer(
    initialState,
    on(toggleSidebar, state => ({...state, sidebarOpen:!state.sidebarOpen})),
    on(toggleWeekPickerDialog, state => ({...state, weekPickerDialogOpen:!state.weekPickerDialogOpen})),

    on(changeSelectedWeek, (state, action) => ({...state, selectedWeek: changeWeek(state.selectedWeek, action.changeBy)})),
    on(changeSelectedWeekByMonth, (state, action) => ({...state, selectedWeek:changeMonth(state.selectedWeek, action.changeBy)})),
    on(setSelectedWeek, (state, action) => ({...state, selectedWeek:action.week}))
)

export function appReducer(state:AppState, action:Action){
    return _appReducer(state, action)
}