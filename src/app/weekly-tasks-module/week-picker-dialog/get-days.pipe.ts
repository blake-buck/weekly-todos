import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({name:'getDaysPipe'})

export class GetDaysPipe implements PipeTransform{
    transform(value:string){
        let splitValue = value.split('-');
        let isoWeek = splitValue[0];
        let year = splitValue[1];
        let currentWeek = moment().isoWeek(+isoWeek).year(+year);

        let firstDayOfMonth = moment(currentWeek).day(1).date(1);
        let currentMonth = firstDayOfMonth.format('MM')
        let currentYear = firstDayOfMonth.format('YYYY')
        let bufferLength = 0;
        if(firstDayOfMonth.day() == 0){
            bufferLength = 6
        }
        else{
            bufferLength = firstDayOfMonth.day() - 1;
        }
        let monthArray = new Array(bufferLength).fill({day:''})

        for(let i=0; i < firstDayOfMonth.daysInMonth(); i++){
            let day = `${i + 1}`
            if(i < 9){
                day = '0' + day;
            }
            monthArray.push({day, month:currentMonth, year:currentYear})
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