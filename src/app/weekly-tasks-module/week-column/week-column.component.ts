import { Component, Input } from "@angular/core";
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/store/app.actions';
import { selectTasksForWeekAndDay } from 'src/app/store/app.selectors';

@Component({
    selector:'week-column',
    templateUrl:'week-column.component.html',
    styleUrls:['week-column.component.scss']
})

export class WeekColumnComponent{
    @Input() dayOfWeek:string;
    tasks$ 

    constructor(private store:Store<{app:AppState}>){}

    ngOnInit(){
        this.tasks$ = this.store.select(selectTasksForWeekAndDay(this.dayOfWeek))
    }

    addTask(){
        const task = {
            // these are handled in the reducer
            id:-1,
            week:'',


            day:this.dayOfWeek,

            time:'',
            taskText:'',

            backgroundColor:'',
            complete:false,
            isEditing:true
        }
        this.store.dispatch(addTask({task}))
    }
}