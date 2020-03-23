import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppStore } from './app.state';
import { selectState } from './app.selectors';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class AppService{
    constructor(private store:Store<AppStore>){}

    storeState(){
        this.store
            .select(selectState)
            .pipe(first())
            .subscribe(state => {
                localStorage.setItem('state', JSON.stringify(state))
            })
    }

    getStateFromStorage(){
        let stateString = localStorage.getItem('state')
        return JSON.parse(stateString)
    }
}