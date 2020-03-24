import { appReducer } from "../store/app.reducer"
import { initialState } from '../store/app.state'
import { toggleSidebar, toggleWeekPickerDialog, toggleTaskDialog, getStateFromStorageSuccess, changeSelectedWeek, changeSelectedWeekByMonth, setSelectedWeek, addTask, changeTask, setSelectedTask, deleteTask } from '../store/app.actions'


describe('AppReducer', async () => {
    let initState = {...initialState}

    beforeEach(() => {initState = {...initialState}})

    // Storage Actions
    it('getStateFromStorageSuccess should set state equal to a new value', () => {
        const mockStoreState = {
            ...initState,
            selectedWeek:'1-2000'
        }

        const newState = appReducer(initState, getStateFromStorageSuccess({state:mockStoreState}))

        expect(newState.selectedWeek).toBe('1-2000')
    })

    // Layout Actions
    it('toggleSidebar should set sideBarOpen equal to true/false', () => {
        expect(initState.sidebarOpen).toBe(false);

        const firstState = appReducer(initState, toggleSidebar())
        expect(firstState.sidebarOpen).toBe(true);

        const secondState = appReducer({...firstState}, toggleSidebar())
        expect(secondState.sidebarOpen).toBe(false)
    })

    it('toggleWeekPickerDialog should set weekPickerDialogOpen equal to true/false', () => {
        expect(initState.weekPickerDialogOpen).toBe(false);

        const firstState = appReducer(initState, toggleWeekPickerDialog())
        expect(firstState.weekPickerDialogOpen).toBe(true);

        const secondState = appReducer({...firstState}, toggleWeekPickerDialog())
        expect(secondState.weekPickerDialogOpen).toBe(false)
    })

    it('toggleTaskDialog should set toggleTaskDialog equal to true/false', () => {
        expect(initState.taskDialogOpen).toBe(false);

        const firstState = appReducer(initState, toggleTaskDialog())
        expect(firstState.taskDialogOpen).toBe(true);

        const secondState = appReducer({...firstState}, toggleTaskDialog())
        expect(secondState.taskDialogOpen).toBe(false)
    })


    // Date Actions 
    it('changeSelectedWeek should change selectedWeek by the given value', () => {
        initState = {
            ...initState,
            selectedWeek:'10-2000'
        }

        const firstState = appReducer(initState, changeSelectedWeek({changeBy: 1}))
        expect(firstState.selectedWeek).toBe('11-2000')

        const secondState = appReducer(initState, changeSelectedWeek({changeBy: -1}))
        expect(secondState.selectedWeek).toBe('9-2000')
        
        const thirdState = appReducer(initState, changeSelectedWeek({changeBy: -10}))
        expect(thirdState.selectedWeek).toBe('52-1999')

        const fourthState = appReducer(initState, changeSelectedWeek({changeBy: 43}))
        expect(fourthState.selectedWeek).toBe('1-2001')
    })

    it('changeSelectedWeekByMonth should change selectedWeek by the given number of months', () => {
        initState = {
            ...initState,
            selectedWeek:'10-2000'
        }

        const firstState = appReducer(initState, changeSelectedWeekByMonth({changeBy:1}))
        expect(firstState.selectedWeek).toBe('15-2000')

        const secondState = appReducer(initState, changeSelectedWeekByMonth({changeBy:-1}))
        expect(secondState.selectedWeek).toBe('7-2000')
    })

    it('setSelectedWeek should set selectedWeek to the given value', () => {
        const firstState = appReducer(initState, setSelectedWeek({week:'1-2000'}))
        expect(firstState.selectedWeek).toBe('1-2000')
    })

    // Task Actions
    it('addTask should add a new task', () => {
        const task = {
            // these are handled in the reducer
            id:-1,
            week:'',
            // ********************************

            day:'Monday',

            taskText:'',

            backgroundColor:'',
            complete:false,
            isEditing:true
        }

        const firstState = appReducer(initState, addTask({task}))
        const newTask = firstState.tasks[0]

        expect(newTask).toBeTruthy()
        expect(newTask.day).toBe('Monday');
        expect(newTask.isEditing).toBe(true);
    })

    it('changeTask should change the given task', () => {
        const task = {
            id:0,
            week:'1-2000',

            day:'Monday',

            taskText:'blah blah blah',

            backgroundColor:'',
            complete:false,
            isEditing:false
        }

        initState = {
            ...initState,
            tasks:[task]
        }

        const firstState = appReducer(initState, changeTask({task: {...task, taskText:'something useful'}}))
        expect(firstState.tasks[0].taskText).toBe('something useful')
    })

    it('setSelectedTask should set selectedTask to the given task', () => {
        const task = {
            id:0,
            week:'1-2000',

            day:'Monday',

            taskText:'blah blah blah',

            backgroundColor:'',
            complete:false,
            isEditing:false
        }
        initState = {
            ...initState,
            tasks:[task]
        }
        const firstState = appReducer(initState, setSelectedTask({task}))
        expect(firstState.selectedTask.id).toBe(0);
    })

    it('deleteTask should delete a task', () => {
        const task = {
            id:0,
            week:'1-2000',

            day:'Monday',

            taskText:'blah blah blah',

            backgroundColor:'',
            complete:false,
            isEditing:false
        }
        initState = {
            ...initState,
            tasks:[task]
        }

        const firstState = appReducer(initState, deleteTask({taskId: 0}))
        expect(firstState.tasks.length).toBe(0);
    })
    
})