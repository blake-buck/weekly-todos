import { Component } from "@angular/core";
import { selectTaskDialogOpen, selectSelectedTask } from 'src/app/store/app.selectors';
import { Store } from '@ngrx/store';
import { AppState, Task } from 'src/app/store/app.state';
import { changeTask, setSelectedTask, toggleTaskDialog } from 'src/app/store/app.actions';

@Component({
    selector:'task-dialog',
    templateUrl:'task-dialog.component.html',
    styleUrls:['task-dialog.component.scss']
})

export class TaskDialogComponent{
    constructor(private store:Store<{app:AppState}>){}

    dialogOpen$ = this.store.select(selectTaskDialogOpen);
    selectedTask$ = this.store.select(selectSelectedTask);

    handleKeydown(task:Task, event:any){
        if(event.key === 'Enter'){
            event.preventDefault();
            this.blur(task, event.target.value)
        }
    }

    blur(task:Task, taskText:string){
        const newTask = {...task, taskText}
        this.store.dispatch(changeTask({task: {...newTask}}))
        this.store.dispatch(setSelectedTask({task: {...newTask}}))
    }

    toggleComplete(task:Task){
        const newTask = {...task, complete:!task.complete}
        this.store.dispatch(changeTask({task: {...newTask}}))
        this.store.dispatch(setSelectedTask({task: {...newTask}}))
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
        }
    }
}