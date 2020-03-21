import { createReducer, on, Action } from '@ngrx/store';
import { initialState, AppState } from './app.state';
import { toggleSidebar, toggleWeekPickerDialog, changeSelectedWeek, changeSelectedWeekByMonth, setSelectedWeek } from './app.actions';
import * as moment from 'moment';

function changeWeek(selectedWeek:string, changeBy:number){
    let splitValue = selectedWeek.split('-');
    let isoWeek = splitValue[0];
    let year = splitValue[1];
    let currentWeek = moment().isoWeek(+isoWeek).year(+year);
    let nextWeek = currentWeek.isoWeek(+isoWeek + changeBy)
    return `${nextWeek.isoWeek()}-${nextWeek.year()}`
}

function changeMonth(selectedWeek:string, changeBy:number){
    let splitValue = selectedWeek.split('-');
    let isoWeek = splitValue[0];
    let year = splitValue[1];
    let currentWeek = moment().isoWeek(+isoWeek).year(+year);
    let nextWeek = currentWeek.month(currentWeek.month() + changeBy)
    return `${nextWeek.isoWeek()}-${nextWeek.year()}`
}

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