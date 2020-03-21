import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({name:'getMonthAndYear'})

export class GetMonthAndYearPipe implements PipeTransform{
    transform(value:string){
        let splitValue = value.split('-');
        let isoWeek = splitValue[0];
        let year = splitValue[1];
        let currentWeek = moment().isoWeek(+isoWeek).year(+year);

        let firstDayOfWeek = moment(currentWeek).weekday(1);

        // returns something along the lines of Mar 16 - Mar 22 2020
        return firstDayOfWeek.format('MMMM YYYY')
    }
}