import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { splitSelectedWeek } from 'src/app/utils';

@Pipe({name:'getDaysPipe'})

export class GetDaysPipe implements PipeTransform{
    transform(value:string){
        const {isoWeek, year} = splitSelectedWeek(value);

        let firstDayOfMonthMoment = moment().isoWeek(isoWeek).year(year).day(1).date(1);

        let bufferLength = firstDayOfMonthMoment.isoWeekday() - 1;
        let monthArray = new Array(bufferLength).fill({day:''})

        for(let i=0; i < firstDayOfMonthMoment.daysInMonth(); i++){
            let day = i < 9 ? `0${i+1}` : `${i+1}`; 
            monthArray.push({
                day, 
                month:firstDayOfMonthMoment.format('MM'), 
                year:firstDayOfMonthMoment.format('YYYY')
            })
        }

        let endBuffer = []
        if(42 - monthArray.length > 0){
            endBuffer = new Array(42-monthArray.length).fill({day:''})
        }
        if(35 - monthArray.length > 0){
            endBuffer = new Array(35-monthArray.length).fill({day:''})
        }

        return [...monthArray, ...endBuffer]
    }
}