import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { splitSelectedWeek } from 'src/app/utils';

@Pipe({name:'formatWeek'})

export class FormatWeekPipe implements PipeTransform{
    transform(value:string){
        const {isoWeek, year} = splitSelectedWeek(value);
        let currentWeek = moment().isoWeek(+isoWeek).year(+year);

        let firstDayOfWeek = moment(currentWeek).weekday(1);
        let lastDayOfWeek = moment(currentWeek).weekday(7);


        // handles situations involving weeks starting in december and ending in january
        if(firstDayOfWeek.year() !== lastDayOfWeek.year()){
            return `${firstDayOfWeek.format('MMM DD, YYYY')} - ${lastDayOfWeek.format('MMM DD, YYYY')}`
        }

        // returns something along the lines of Mar 16 - Mar 22 2020
        return `${firstDayOfWeek.format('MMM DD')} - ${lastDayOfWeek.format('MMM DD, YYYY')}`
    }
}