import { AppService } from "../store/app.service";
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../store/app.state';

describe('AppService', async () => {
    let service: AppService;
    let store = TestBed.inject(MockStore)
    console.log('STORE ', store)
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[
                provideMockStore({initialState})
            ]
        })
    })
    beforeEach(() => service = new AppService(store));

})