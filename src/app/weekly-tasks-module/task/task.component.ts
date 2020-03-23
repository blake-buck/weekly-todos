import { Component, Input } from "@angular/core";
import { Task, AppStore } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { changeTask, toggleTaskDialog, setSelectedTask } from 'src/app/store/app.actions';

@Component({
    selector:'task',
    templateUrl:'task.component.html',
    styleUrls:['task.component.scss']
})

export class TaskComponent {
    @Input() task: Task;

    constructor(private store:Store<AppStore>){}

    handleKeydown(event:KeyboardEvent){
        if(event.key === 'Enter'){
            event.preventDefault();
            let target = <HTMLInputElement>event.target
            this.blur(target.value)
        }
    }

    blur(taskText:string){
        if(this.task.isEditing){
            // wrapping this with a setTimeout prevents the "Expression has changed after it was checked" error
            setTimeout(() => this.store.dispatch(changeTask({task: {...this.task, taskText, isEditing:false}})), 0)
        }
    }

    openDialog(){
        if(!this.task.isEditing){
            this.store.dispatch(setSelectedTask({task:this.task}))
            this.store.dispatch(toggleTaskDialog());
        }
    }
}