import {Component} from '@angular/core';
import { toggleWeekPickerDialog, changeSelectedWeek } from 'src/app/store/app.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectSelectedWeek } from 'src/app/store/app.selectors';

@Component({
    selector:'week-picker',
    templateUrl:'week-picker.component.html',
    styleUrls:['week-picker.component.scss']
})

export class WeekPickerComponent{
    constructor(private store:Store<{app:AppState}>){}

    selectedWeek$ = this.store.select(selectSelectedWeek);

    toggleDialog(){
        this.store.dispatch(toggleWeekPickerDialog())
    }

    goForwardOneWeek(){
        this.store.dispatch(changeSelectedWeek({changeBy:1}))
    }

    goBackwardOneWeek(){
        this.store.dispatch(changeSelectedWeek({changeBy:-1}))
    }
}