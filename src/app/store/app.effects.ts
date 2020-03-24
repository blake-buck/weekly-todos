import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from './app.service';
import { getStateFromStorageSuccess, getStateFromStorage } from './app.actions';
import { map, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppStore } from './app.state';

@Injectable()

export class AppEffects{
    constructor(private actions$:Actions, private appService:AppService, private store:Store<AppStore>){}

    // After every action that isn't initialization or getting state from storage, store the updated state
    sendStateToStorage$ = createEffect(
        () => 
            this.actions$
                .pipe(
                    filter(action => !action.type.includes('GET STATE FROM STORAGE') && !action.type.includes('@ngrx/effects')),
                    map((action) => this.appService.storeState())
                ),
        {dispatch: false}
    )

    getStateFromStorage$ = createEffect(
        () => 
            this.actions$
                .pipe(
                    ofType(getStateFromStorage),
                    map(() => this.appService.getStateFromStorage()),
                    map((state) => {
                        if(state){
                            this.store.dispatch(getStateFromStorageSuccess({state}))
                        }
                    })
                ),
        {dispatch: false}
    )
}