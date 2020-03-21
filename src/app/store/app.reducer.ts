import { createReducer, on, Action } from '@ngrx/store';
import { initialState, AppState } from './app.state';
import { toggleSidebar, toggleWeekPickerDialog, changeSelectedWeek, changeSelectedWeekByMonth, setSelectedWeek, addTask, changeTask } from './app.actions';
import { changeWeek, changeMonth } from '../utils';

const _appReducer = createReducer(
    initialState,

    // Layout Actions
    on(toggleSidebar, state => ({...state, sidebarOpen:!state.sidebarOpen})),
    on(toggleWeekPickerDialog, state => ({...state, weekPickerDialogOpen:!state.weekPickerDialogOpen})),

    // Date Actions
    on(changeSelectedWeek, (state, action) => ({...state, selectedWeek: changeWeek(state.selectedWeek, action.changeBy)})),
    on(changeSelectedWeekByMonth, (state, action) => ({...state, selectedWeek:changeMonth(state.selectedWeek, action.changeBy)})),
    on(setSelectedWeek, (state, action) => ({...state, selectedWeek:action.week})),

    // Task Actions
    on(addTask, (state, action) => ({...state, tasks:[...state.tasks, {...action.task, id:state.nextTaskId, week:state.selectedWeek}], nextTaskId:state.nextTaskId+1})),
    on(changeTask, (state, action) => ({
        ...state,
        tasks:state.tasks.map(task => {
            if(task.id == action.task.id){
                return {...action.task}
            }
            return task
        })
    }))
)

export function appReducer(state:AppState, action:Action){
    return _appReducer(state, action)
}