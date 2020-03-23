import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { splitSelectedWeek } from 'src/app/utils';

@Pipe({name:'getMonthAndYear'})

export class GetMonthAndYearPipe implements PipeTransform{
    transform(value:string){
        const {isoWeek, year} = splitSelectedWeek(value);
        let currentWeek = moment().set({year, isoWeek})

        let firstDayOfWeek = moment(currentWeek).set({isoWeekday:1})

        // returns something along the lines of Mar 16 - Mar 22 2020
        return firstDayOfWeek.format('MMMM YYYY')
    }
}