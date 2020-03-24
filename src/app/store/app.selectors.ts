import { AppStore } from "./app.state";
import { createSelector } from '@ngrx/store';

export const selectState = (state:AppStore) => state.app;

// Layout selectors
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

// Selected week selectors
export const selectSelectedWeek = createSelector(
    selectState,
    state => state.selectedWeek
)


// Task selectors
export const selectTasks = createSelector(
    selectState,
    state => state.tasks
)

export const selectWeeksWithTasksInThem = createSelector(
    selectState,
    state => state.weeksWithTasksInThem
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

export const selectTasksForWeekAndDay = (day:string) => createSelector(
    selectTasks,
    selectSelectedWeek,
    (tasks, selectedWeek) => tasks.filter(task => task.week === selectedWeek && task.day === day)
)

