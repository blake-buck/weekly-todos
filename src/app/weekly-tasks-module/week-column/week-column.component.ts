import { Component, Input } from "@angular/core";
import { AppStore } from 'src/app/store/app.state';
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
    

    constructor(private store:Store<AppStore>){}

    // tasks$ need to be selected in ngOnInit, otherwise dayOfWeek comes in undefined
    tasks$ 
    ngOnInit(){
        this.tasks$ = this.store.select(selectTasksForWeekAndDay(this.dayOfWeek))
    }

    addTask(){
        this.store.dispatch(addTask({dayOfWeek: this.dayOfWeek}))
    }
}