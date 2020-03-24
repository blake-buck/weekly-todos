import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { splitSelectedWeek } from 'src/app/utils';

@Pipe({name:'formatWeek'})

// used in week-picker-dialog.component.html, sidebar-item.component.html
export class FormatWeekPipe implements PipeTransform{
    transform(selectedWeek:string){
        const {isoWeek, year} = splitSelectedWeek(selectedWeek);
        
        let currentWeek = moment().set({year}).set({isoWeek});

        let firstDayOfWeek = moment(currentWeek).set({isoWeekday:1});
        let lastDayOfWeek = moment(currentWeek).set({isoWeekday:7});

        // handles situations involving weeks starting in december and ending in january
        if(firstDayOfWeek.year() !== lastDayOfWeek.year()){
            return `${firstDayOfWeek.format('MMM DD, YYYY')} - ${lastDayOfWeek.format('MMM DD, YYYY')}`
        }

        // returns something along the lines of Mar 16 - Mar 22 2020
        return `${firstDayOfWeek.format('MMM DD')} - ${lastDayOfWeek.format('MMM DD, YYYY')}`
    }
}