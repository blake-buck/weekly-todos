import * as moment from 'moment';

export interface AppState{
    nextTaskId: number;
    weeksWithTasksInThem: string[];
    tasks: Task[];

    selectedWeek: string;
    selectedTask: Task | null;

    sidebarOpen:boolean;
    weekPickerDialogOpen:boolean;
    taskDialogOpen:boolean;
}

export interface Task{
    id: number;

    week:string;
    day:string;
    
    taskText: string;
    complete: boolean;
    backgroundColor:string;

    isEditing:boolean;
}

export interface AppStore{
    app:AppState
}

export const initialState:AppState = {
    nextTaskId:0,
    weeksWithTasksInThem:[],
    tasks:[],
    selectedWeek:`${moment().isoWeek()}-${moment().year()}`,
    selectedTask: null,
    sidebarOpen:false,
    weekPickerDialogOpen: false,
    taskDialogOpen: false
}