import {NgModule} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { WeekColumnComponent } from './week-column/week-column.component';
import { WeekPickerComponent } from './week-picker/week-picker.component';
import { WeekPickerDialogComponent } from './week-picker-dialog/week-picker-dialog.component';
import { CommonModule } from '@angular/common';
import { FormatWeekPipe } from './week-picker/format-week.pipe';
import { GetMonthAndYearPipe } from './week-picker-dialog/get-month-year.pipe';
import { GetDaysPipe } from './week-picker-dialog/get-days.pipe';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        TaskComponent,
        TaskDialogComponent,
        WeekColumnComponent,
        WeekPickerComponent,
        WeekPickerDialogComponent,
        
        FormatWeekPipe,
        GetMonthAndYearPipe,
        GetDaysPipe
    ],
    exports:[
        WeekColumnComponent,
        WeekPickerComponent,

        WeekPickerDialogComponent,
        TaskDialogComponent
    ]
})

export class WeeklyTasksModule {}