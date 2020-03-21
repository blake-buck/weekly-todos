import { createAction, props } from "@ngrx/store";

export const addTask = createAction('ADD TASK')

export const toggleSidebar = createAction('TOGGLE SIDEBAR')
export const toggleWeekPickerDialog = createAction('TOGGLE WEEK PICKER DIALOG')

export const changeSelectedWeek = createAction('CHANGE SELECTED WEEK', props<{changeBy:number}>())
export const changeSelectedWeekByMonth = createAction('CHANGE SELECTED WEEK BY MONTH', props<{changeBy:number}>())
export const setSelectedWeek = createAction('SET SELECTED WEEK', props<{week:string}>())