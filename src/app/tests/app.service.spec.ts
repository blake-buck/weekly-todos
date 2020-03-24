import { AppService } from "../store/app.service";
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState, AppStore } from '../store/app.state';

describe('AppService', () => {
    let service: AppService;
    let store: MockStore<AppStore>

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[
                provideMockStore({initialState:{app:initialState}})
            ]
        })

        store = TestBed.inject(MockStore)
    })
    beforeEach(() => service = new AppService(store));
    beforeEach(() => localStorage.clear());

    it('storeState should store state in local storage', () => {
        service.storeState()
        expect(localStorage.getItem('state')).toBeTruthy()
    })

    it('getStateFromStorage should get state from local storage', () => {
        localStorage.setItem('state', JSON.stringify({...initialState, selectedWeek:'1-2000'}))

        let state = service.getStateFromStorage();

        expect(state).toBeTruthy();
        expect(state.selectedWeek).toBe('1-2000')
    })

})