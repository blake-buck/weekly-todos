import {NgModule} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { WeekColumnComponent } from './week-column/week-column.component';
import { WeekPickerComponent } from './week-picker/week-picker.component';
import { WeekPickerDialogComponent } from './week-picker-dialog/week-picker-dialog.component';

@NgModule({
    declarations:[
        TaskComponent,
        TaskDialogComponent,
        WeekColumnComponent,
        WeekPickerComponent,
        WeekPickerDialogComponent
    ],
    exports:[
        WeekColumnComponent,
        WeekPickerComponent,

        WeekPickerDialogComponent,
        TaskDialogComponent
    ]
})

export class WeeklyTasksModule {}