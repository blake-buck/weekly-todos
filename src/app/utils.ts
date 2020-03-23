import * as moment from 'moment';

// splits a selected week value e.g. 3-2020 into its ISOweek and year parts
export function splitSelectedWeek(currentWeek:string){
    let splitValue = currentWeek.split('-');
    let isoWeek = +splitValue[0];
    let year = +splitValue[1];

    return {isoWeek, year}
}


// changeWeek and changeMonth are used in the reducer
// changeWeek increments/decrements the selectedWeek value by isoWeek
export function changeWeek(selectedWeek:string, changeBy:number){
    const {isoWeek, year} = splitSelectedWeek(selectedWeek);

    let currentWeek = moment().isoWeek(isoWeek).year(year);
    let nextWeek = currentWeek.isoWeek(isoWeek + changeBy)

    return `${nextWeek.isoWeek()}-${nextWeek.year()}`
}

// changeMonth increments/decrements the selectedWeek value by month
export function changeMonth(selectedWeek:string, changeBy:number){
    const {isoWeek, year} = splitSelectedWeek(selectedWeek);

    let currentWeek = moment().set({year:year, isoWeek}).set({isoWeekday:1});
    let nextWeek = currentWeek.set({month:currentWeek.month() + changeBy, date:15});
    
    return `${nextWeek.isoWeek()}-${nextWeek.year()}`
}

export const BACKGROUND_COLORS = {
    GREEN:'#5cb85c',
    YELLOW:'#f0ad4e',
    RED:'#d9534f',
    CYAN:'#5bc0de'
}