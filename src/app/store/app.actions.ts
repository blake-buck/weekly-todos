import { createAction, props } from "@ngrx/store";
import { Task } from './app.state';

export const addTask = createAction('ADD TASK', props<{task:Task}>());
export const changeTask = createAction('CHANGE TASK', props<{task:Task}>());
export const setSelectedTask = createAction('SET SELECTED TASK', props<{task:Task | null}>());

export const toggleSidebar = createAction('TOGGLE SIDEBAR');
export const toggleWeekPickerDialog = createAction('TOGGLE WEEK PICKER DIALOG');
export const toggleTaskDialog = createAction('TOGGLE TASK DIALOG');

export const changeSelectedWeek = createAction('CHANGE SELECTED WEEK', props<{changeBy:number}>());
export const changeSelectedWeekByMonth = createAction('CHANGE SELECTED WEEK BY MONTH', props<{changeBy:number}>());
export const setSelectedWeek = createAction('SET SELECTED WEEK', props<{week:string}>());