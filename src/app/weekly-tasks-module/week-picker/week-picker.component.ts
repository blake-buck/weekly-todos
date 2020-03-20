import {Component} from '@angular/core';
import { toggleWeekPickerDialog } from 'src/app/store/app.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector:'week-picker',
    templateUrl:'week-picker.component.html',
    styleUrls:['week-picker.component.scss']
})

export class WeekPickerComponent{
    constructor(private store:Store<{app:AppState}>){}

    toggleDialog(){
        this.store.dispatch(toggleWeekPickerDialog())
    }
}