import * as moment from 'moment';

export interface AppState{
    nextTaskId: number;
    weeksWithTasksInThem: string[];
    tasks: Task[];

    selectedWeek: string;

    sidebarOpen:boolean;
    weekPickerDialogOpen:boolean;
    taskDialogOpen:boolean;
}

export interface Task{
    id: number;

    week:string;
    day:string;
    time:string;
    
    taskText: string;
    complete: boolean;
    backgroundColor:string;
}

export const initialState:AppState = {
    nextTaskId:0,
    weeksWithTasksInThem:[],
    tasks:[],
    selectedWeek:`${moment().isoWeek()}-${moment().year()}`,
    sidebarOpen:false,
    weekPickerDialogOpen: false,
    taskDialogOpen: false
}