import { createReducer, on, Action } from '@ngrx/store';
import { initialState, AppState } from './app.state';
import { toggleSidebar, toggleWeekPickerDialog, changeSelectedWeek, changeSelectedWeekByMonth, setSelectedWeek, addTask, changeTask, toggleTaskDialog, setSelectedTask, getStateFromStorageSuccess, deleteTask } from './app.actions';
import { changeWeek, changeMonth } from '../utils';

const _appReducer = createReducer(
    initialState,
    
    // Storage actions
    on(getStateFromStorageSuccess, (state, action) => ({...action.state})),

    // Layout Actions
    on(toggleSidebar, state => ({...state, sidebarOpen:!state.sidebarOpen})),
    on(toggleWeekPickerDialog, state => ({...state, weekPickerDialogOpen:!state.weekPickerDialogOpen})),
    on(toggleTaskDialog, (state, action) => ({...state, taskDialogOpen: !state.taskDialogOpen})),

    // Date Actions
    on(changeSelectedWeek, (state, action) => ({...state, selectedWeek: changeWeek(state.selectedWeek, action.changeBy)})),
    on(changeSelectedWeekByMonth, (state, action) => ({...state, selectedWeek:changeMonth(state.selectedWeek, action.changeBy)})),
    on(setSelectedWeek, (state, action) => ({...state, selectedWeek:action.week})),

    // Task Actions
    on(addTask, (state, action) => ({
        ...state, 
        tasks:[
            ...state.tasks, 
            {
                week:state.selectedWeek,
                day: action.dayOfWeek,

                time:'',
                taskText:'',

                backgroundColor:'',
                complete:false,
                isEditing:true,
                id:state.nextTaskId, 
            }
        ],
        weeksWithTasksInThem:state.weeksWithTasksInThem.includes(state.selectedWeek) ? state.weeksWithTasksInThem : [...state.weeksWithTasksInThem, state.selectedWeek],
        nextTaskId:state.nextTaskId+1
    })),
    on(changeTask, (state, action) => ({
        ...state,
        tasks:state.tasks.map(task => {
            if(task.id == action.task.id){
                return {...action.task}
            }
            return task
        })
    })),
    on(setSelectedTask, (state, action) => ({...state, selectedTask:action.task})),
    on(deleteTask, (state, action) => ({
        ...state, 
        taskDialogOpen:false,
        tasks: state.tasks.filter(task => {
            if(task.id === action.taskId){
                return false
            }
            return true
        })
    }))
)

export function appReducer(state:AppState, action:Action){
    return _appReducer(state, action)
}