import { createAction, props } from "@ngrx/store";
import { Task, AppState } from './app.state';


// Actions revolving around tasks
export const addTask                    = createAction('ADD TASK', props<{task:Task}>());
export const changeTask                 = createAction('CHANGE TASK', props<{task:Task}>());
export const deleteTask                 = createAction('DELETE TASK', props<{taskId:number}>());
export const setSelectedTask            = createAction('SET SELECTED TASK', props<{task:Task | null}>());

// Actions revolving around the layout
export const toggleSidebar              = createAction('TOGGLE SIDEBAR');
export const toggleWeekPickerDialog     = createAction('TOGGLE WEEK PICKER DIALOG');
export const toggleTaskDialog           = createAction('TOGGLE TASK DIALOG');

// Actions revolving around the selected week
export const changeSelectedWeek         = createAction('CHANGE SELECTED WEEK', props<{changeBy:number}>());
export const changeSelectedWeekByMonth  = createAction('CHANGE SELECTED WEEK BY MONTH', props<{changeBy:number}>());
export const setSelectedWeek            = createAction('SET SELECTED WEEK', props<{week:string}>());

// Actions around storing/retrieving state locally
export const getStateFromStorage        = createAction('GET STATE FROM STORAGE')
export const getStateFromStorageSuccess = createAction('GET STATE FROM STORAGE SUCCESS', props<{state:AppState}>())
export const getStateFromStorageFailure = createAction('GET STATE FROM STORAGE FAILURE')
export const sendStateToStorage         = createAction('SEND STATE TO STORAGE');