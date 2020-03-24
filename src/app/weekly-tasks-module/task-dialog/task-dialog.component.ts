import { Component } from "@angular/core";
import { selectTaskDialogOpen, selectSelectedTask } from 'src/app/store/app.selectors';
import { Store } from '@ngrx/store';
import { Task, AppStore } from 'src/app/store/app.state';
import { changeTask, setSelectedTask, toggleTaskDialog, deleteTask } from 'src/app/store/app.actions';
import { BACKGROUND_COLORS } from 'src/app/utils';

@Component({
    selector:'task-dialog',
    templateUrl:'task-dialog.component.html',
    styleUrls:['task-dialog.component.scss']
})

export class TaskDialogComponent{
    constructor(private store:Store<AppStore>){}

    dialogOpen$ = this.store.select(selectTaskDialogOpen);
    selectedTask$ = this.store.select(selectSelectedTask);
    BACKGROUND_COLORS = BACKGROUND_COLORS;

    // if Enter key is pressed, prevent newline from being added to text, and blur the textarea
    handleKeydown(task:Task, event:KeyboardEvent){
        if(event.key === 'Enter'){
            event.preventDefault();
            let target = <HTMLInputElement>event.target;
            this.blur(task, target.value)
        }
    }

    blur(task:Task, taskText:string){
        const newTask = {...task, taskText}
        // Whenever the task is changed, the selected task needs to updated as well
        this.store.dispatch(changeTask({task: {...newTask}}))
        this.store.dispatch(setSelectedTask({task: {...newTask}}))
    }

    toggleComplete(task:Task){
        const newTask = {...task, complete:!task.complete}
        // Whenever the task is changed, the selected task needs to updated as well
        this.store.dispatch(changeTask({task: {...newTask}}))
        this.store.dispatch(setSelectedTask({task: {...newTask}}))
    }

    // controls whether the custom background-color selection element is being displayed
    displaySelect = false;
    toggleDisplaySelect(){
        this.displaySelect = !this.displaySelect
    }

    selectBackgroundColor(task:Task, color:string){
        const newTask = {...task, backgroundColor:color}
        this.store.dispatch(changeTask({task: {...newTask}}))
        this.toggleDisplaySelect()
    }

    deleteTask(taskId:number){
        this.store.dispatch(deleteTask({taskId}))
    }

    canCloseDialog = true;
    // if user clicks inside dialog, prevent dialog from closing
    preventDialogClose(){
        this.canCloseDialog = false;
        setTimeout(() => this.canCloseDialog = true, 200)
    }
    // if user clicks outside dialog, close dialog
    closeDialog(){
        if(this.canCloseDialog){
            this.store.dispatch(toggleTaskDialog())
            if(this.displaySelect){
                this.toggleDisplaySelect()
            }
        }
    }
}