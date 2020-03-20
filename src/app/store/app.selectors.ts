import { AppState } from "./app.state";
import { createSelector } from '@ngrx/store';

const selectState = (state:{app:AppState}) => state.app;

export const selectSidebarOpen = createSelector(
    selectState,
    state => state.sidebarOpen
)
export const selectWeekPickerDialogOpen = createSelector(
    selectState,
    state => state.weekPickerDialogOpen
)
export const selectTaskDialogOpen = createSelector(
    selectState,
    state => state.taskDialogOpen
)