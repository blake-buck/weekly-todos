import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppStore } from './app.state';
import { selectState, selectTaskById } from './app.selectors';
import { first } from 'rxjs/operators';
import { changeTask } from './app.actions';

@Injectable({
    providedIn:'root'
})

export class AppService{
    constructor(private store:Store<AppStore>){}

    // store state in web storage under key 'state'
    storeState(){
        this.store
            .select(selectState)
            .pipe(first())
            .subscribe(state => {
                localStorage.setItem('state', JSON.stringify(state))
            })
    }

    // get state from web storage
    getStateFromStorage(){
        let stateString = localStorage.getItem('state')
        return JSON.parse(stateString)
    }

    onTaskDrop(unparsedDragData:string, unparsedDropData:string){

        // parse raw drag/drop data into objects
        let dragData = JSON.parse(unparsedDragData);
        let dropData = JSON.parse(unparsedDropData)
        
        // check that dragged data is a task and that drop data is a weekColumn
        if((dragData && dragData.isTask) && (dropData && dropData.isWeekColumn)){
            
            // select dragged task and change the day of the week it belongs to
            this.store
                .select(
                    selectTaskById(dragData.taskId)
                )
                .pipe(
                    first()
                )
                .subscribe(task => {
                    this.store.dispatch(changeTask({task: {...task, day:dropData.dayOfWeek}}))
                })
        }
    }
}