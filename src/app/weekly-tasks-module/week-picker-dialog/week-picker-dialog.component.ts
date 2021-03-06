import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/app.state';
import { toggleWeekPickerDialog, changeSelectedWeekByMonth, setSelectedWeek } from 'src/app/store/app.actions';
import { selectWeekPickerDialogOpen, selectSelectedWeek } from 'src/app/store/app.selectors';
import * as moment from 'moment';

@Component({
    selector:'week-picker-dialog',
    templateUrl:'week-picker-dialog.component.html',
    styleUrls:['week-picker-dialog.component.scss']
})

export class WeekPickerDialogComponent{
    constructor(private store:Store<AppStore>){}
    
    moment = moment;

    selectedWeek$ = this.store.select(selectSelectedWeek);
    dialogOpen$ = this.store.select(selectWeekPickerDialogOpen);
    
    goBackwardOneMonth(){
        this.store.dispatch(changeSelectedWeekByMonth({changeBy:-1}))
    }

    goForwardOneMonth(){
        this.store.dispatch(changeSelectedWeekByMonth({changeBy:1}))
    }

    setSelectedWeek(dayObj:{date:string, month:string, year:string}){
        const {date, month, year} = dayObj;
        // buffer squares have an empty string value for date
        if(date){
            // months are zero-indexed in momentjs, hence the '- 1'
            let week = moment().set({date: +date, month: +month -1, year: +year}).set({isoWeekday:1})
            this.store.dispatch(setSelectedWeek({week:`${week.isoWeek()}-${week.isoWeekYear()}`}))
        }
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
            this.store.dispatch(toggleWeekPickerDialog())
        }
    }
}