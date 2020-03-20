import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { toggleWeekPickerDialog } from 'src/app/store/app.actions';
import { selectWeekPickerDialogOpen } from 'src/app/store/app.selectors';

@Component({
    selector:'week-picker-dialog',
    templateUrl:'week-picker-dialog.component.html',
    styleUrls:['week-picker-dialog.component.scss']
})

export class WeekPickerDialogComponent{
    constructor(private store:Store<{app:AppState}>){}

    dialogOpen$ = this.store.select(selectWeekPickerDialogOpen);

    toggleDialog(){
        this.store.dispatch(toggleWeekPickerDialog())
    }
}