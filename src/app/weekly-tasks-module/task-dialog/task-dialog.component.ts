import { Component } from "@angular/core";
import { selectTaskDialogOpen } from 'src/app/store/app.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector:'task-dialog',
    templateUrl:'task-dialog.component.html',
    styleUrls:['task-dialog.component.scss']
})

export class TaskDialogComponent{
    constructor(private store:Store<{app:AppState}>){}

    dialogOpen$ = this.store.select(selectTaskDialogOpen);
}