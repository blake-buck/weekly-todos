import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { toggleWeekPickerDialog, changeSelectedWeek, changeSelectedWeekByMonth, setSelectedWeek } from 'src/app/store/app.actions';
import { selectWeekPickerDialogOpen, selectSelectedWeek } from 'src/app/store/app.selectors';
import * as moment from 'moment';

@Component({
    selector:'week-picker-dialog',
    templateUrl:'week-picker-dialog.component.html',
    styleUrls:['week-picker-dialog.component.scss']
})

export class WeekPickerDialogComponent{
    constructor(private store:Store<{app:AppState}>){}
    
    moment = moment;

    selectedWeek$ = this.store.select(selectSelectedWeek);
    dialogOpen$ = this.store.select(selectWeekPickerDialogOpen);

    toggleDialog(){
        this.store.dispatch(toggleWeekPickerDialog())
    }

    goBackwardOneMonth(){
        this.store.dispatch(changeSelectedWeekByMonth({changeBy:-1}))
    }

    goForwardOneMonth(){
        this.store.dispatch(changeSelectedWeekByMonth({changeBy:1}))
    }

    setSelectedWeek(dayObj:{day:string, month:string, year:string}){
        const {day, month, year} = dayObj;
        console.log(day)
        let week = moment(`${year}-${month}-${day}`)
        
        console.log(`${week.isoWeek()}-${week.year()}`)
        this.store.dispatch(setSelectedWeek({week:`${week.isoWeek()}-${week.year()}`}))
    }
}