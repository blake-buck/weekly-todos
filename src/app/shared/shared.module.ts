import { NgModule } from '@angular/core';
import { AutofocusDirective } from './directives/autofocus.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { FormatWeekPipe } from './pipes/format-week.pipe';
import { GetDaysPipe } from './pipes/get-days.pipe';
import { GetMonthAndYearPipe } from './pipes/get-month-year.pipe';
import { OrderByDatePipe } from './pipes/orderByDate.pipe';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
    declarations:[
        AutofocusDirective,
        DragAndDropDirective,
        DropTargetDirective,
        FormatWeekPipe,
        GetDaysPipe,
        GetMonthAndYearPipe,
        OrderByDatePipe
    ],
    exports:[
        AutofocusDirective,
        DragAndDropDirective,
        DropTargetDirective,
        FormatWeekPipe,
        GetDaysPipe,
        GetMonthAndYearPipe,
        OrderByDatePipe
    ]
})

export class SharedModule{}