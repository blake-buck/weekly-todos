import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { splitSelectedWeek } from 'src/app/utils';

@Pipe({name:'getMonthAndYear'})

export class GetMonthAndYearPipe implements PipeTransform{
    transform(value:string){
        const {isoWeek, year} = splitSelectedWeek(value);
        let currentWeek = moment().isoWeek(isoWeek).year(year);

        let firstDayOfWeek = moment(currentWeek).weekday(1);

        // returns something along the lines of Mar 16 - Mar 22 2020
        return firstDayOfWeek.format('MMMM YYYY')
    }
}