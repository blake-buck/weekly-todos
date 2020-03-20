export interface AppState{
    nextTaskId: number
    weeksWithTasksInThem: string[]
    tasks: Task[],
    selectedWeek: string
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
    selectedWeek:''
}