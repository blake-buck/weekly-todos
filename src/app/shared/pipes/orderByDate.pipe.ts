import { Pipe, PipeTransform } from '@angular/core';
import { splitSelectedWeek } from 'src/app/utils';

@Pipe({name:'orderByDate'})

// used in sidebar.component.html
export class OrderByDatePipe implements PipeTransform{
    transform(selectedWeeks:string[]){
        let sortedWeeks = [...selectedWeeks]
        sortedWeeks = sortedWeeks.sort((a, b) => {
            let firstValue = splitSelectedWeek(a);
            let secondValue = splitSelectedWeek(b);

            if(firstValue.year > secondValue.year){
                return 1
            }
            if(firstValue.year === secondValue.year && firstValue.isoWeek > secondValue.isoWeek){
                return 1
            }

            if(firstValue.year < secondValue.year){
                return -1
            }
            if(firstValue.year === secondValue.year && firstValue.isoWeek < secondValue.isoWeek){
                return -1
            }
            
            return 0
        })
        return sortedWeeks
    }
}