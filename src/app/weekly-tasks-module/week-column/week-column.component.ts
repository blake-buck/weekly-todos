import { Component, Input } from "@angular/core";

@Component({
    selector:'week-column',
    templateUrl:'week-column.component.html',
    styleUrls:['week-column.component.scss']
})

export class WeekColumnComponent{
    @Input() dayOfWeek:string;
}