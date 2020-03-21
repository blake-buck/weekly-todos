import { Component, Input } from "@angular/core";
import { Task, AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { changeTask, toggleTaskDialog, setSelectedTask } from 'src/app/store/app.actions';

@Component({
    selector:'task',
    templateUrl:'task.component.html',
    styleUrls:['task.component.scss']
})

export class TaskComponent {
    @Input() task: Task;

    constructor(private store:Store<{app:AppState}>){}

    handleKeydown(key:string, taskText:string){
        if(key === 'Enter'){
            this.blur(taskText)
        }
    }

    blur(taskText:string){
        if(this.task.isEditing){
            this.store.dispatch(changeTask({task: {...this.task, taskText, isEditing:false}}))
        }
    }

    openDialog(){
        if(!this.task.isEditing){
            this.store.dispatch(setSelectedTask({task:this.task}))
            this.store.dispatch(toggleTaskDialog());
        }
    }
}