import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { splitSelectedWeek } from 'src/app/utils';

@Pipe({name:'getDaysPipe'})

// used in task-dialog.component.html
export class GetDaysPipe implements PipeTransform{
    transform(selectedWeek:string){
        const {isoWeek, year} = splitSelectedWeek(selectedWeek);

        // set the year and isoWeek, get the first day of that week, then get the first day of that month
        // creates a consistent experience - for weeks that have days in 2 months, this functionality
        // ensures that the first month is always displayed
        let firstDayOfMonthMoment = moment().set({year, isoWeek}).set({day:1}).set({date:1});

        // creates a display buffer - not every month begins on a monday, so some days of the week
        // need to be blank squares
        let bufferLength = firstDayOfMonthMoment.isoWeekday() - 1;
        let monthArray = new Array(bufferLength).fill({date:''})

        // adds date values to the month array
        for(let i=1; i <= firstDayOfMonthMoment.daysInMonth(); i++){
            
            // date needs to be a string, and having dates < 10 prefixed with a 0 is nice for consistency
            let date = i < 10 ? `0${i}` : `${i}`; 

            monthArray.push({
                date, 
                month:firstDayOfMonthMoment.format('MM'), 
                year:firstDayOfMonthMoment.format('YYYY')
            })
        }

        // for months to display as a square consistently, there needs to a be a buffer applied to the 
        // end of the array as well
        let endBuffer = []
        if(42 - monthArray.length >= 0){
            endBuffer = new Array(42-monthArray.length).fill({date:''})
        }
        if(35 - monthArray.length >= 0){
            endBuffer = new Array(35-monthArray.length).fill({date:''})
        }

        return monthArray.concat(endBuffer)
    }
}