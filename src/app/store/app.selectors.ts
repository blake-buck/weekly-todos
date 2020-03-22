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

export const selectSelectedWeek = createSelector(
    selectState,
    state => state.selectedWeek
)


export const selectTasks = createSelector(
    selectState,
    state => state.tasks
)

export const selectTasksForWeekAndDay = (day:string) => createSelector(
    selectTasks,
    selectSelectedWeek,
    (tasks, selectedWeek) => tasks.filter(task => task.week === selectedWeek && task.day === day)
)

export const selectSelectedTask = createSelector(
    selectState,
    state => state.selectedTask
)

export const selectTaskById = (id:number) => createSelector(
    selectState,
    state => state.tasks.find(task => task.id === id)
)

export const selectTasksByIds = (ids: number[]) => createSelector(
    selectState,
    state => state.tasks.filter(task => ids.includes(task.id))
)