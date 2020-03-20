import { createAction } from "@ngrx/store";

export const addTask = createAction('ADD TASK')

export const toggleSidebar = createAction('TOGGLE SIDEBAR')
export const toggleWeekPickerDialog = createAction('TOGGLE WEEK PICKER DIALOG')