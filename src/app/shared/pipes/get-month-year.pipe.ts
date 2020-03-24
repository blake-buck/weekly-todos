import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { splitSelectedWeek } from 'src/app/utils';

@Pipe({name:'getMonthAndYear'})

// used in get week-picker-dialog.component.html
export class GetMonthAndYearPipe implements PipeTransform{
    transform(selectedWeek:string){
        const {isoWeek, year} = splitSelectedWeek(selectedWeek);
        let currentWeek = moment().set({year, isoWeek})

        // for weeks that have days in 2 months, always select the first month
        let firstDayOfWeek = moment(currentWeek).set({isoWeekday:1})

        // returns something along the lines of Mar 16 - Mar 22 2020
        return firstDayOfWeek.format('MMMM YYYY')
    }
}