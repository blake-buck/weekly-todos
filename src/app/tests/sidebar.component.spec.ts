import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AppStore, initialState } from "../store/app.state";
import { TestBed } from "@angular/core/testing";
import { SidebarComponent } from '../sidebar-module/sidebar/sidebar.component';
import { OrderByDatePipe } from '../shared/pipes/orderByDate.pipe';
import { selectSidebarOpen, selectWeeksWithTasksInThem } from '../store/app.selectors';
import { MemoizedSelector } from '@ngrx/store';
import { By } from '@angular/platform-browser';

describe('Sidebar Component', () => {
    let store: MockStore<AppStore>;
    let sidebarOpen$: MemoizedSelector<AppStore, boolean>;
    let weeksWithTasksInThem$: MemoizedSelector<AppStore, string[]>;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[
                SidebarComponent,
                OrderByDatePipe
            ],
            providers:[
                provideMockStore({initialState:{app:initialState}}),
            ]
        })

        
        fixture = TestBed.createComponent(SidebarComponent);
        store = TestBed.inject(MockStore);

        sidebarOpen$ = store.overrideSelector(
            selectSidebarOpen,
            false
        )

        weeksWithTasksInThem$ = store.overrideSelector(
            selectWeeksWithTasksInThem,
            []
        )

        fixture.detectChanges();
    })


    it('if weeksWithTasksInThem$ has a length greater than 0, sidebar-items should display', () => {
        weeksWithTasksInThem$.setResult(['1-2000'])
        store.refreshState();
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('sidebar-item'))).toBeTruthy();
    })

    it('sidebar should have class "open" when sidebarOpen$ is true', () => {
        sidebarOpen$.setResult(true)
        store.refreshState();
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.open'))).toBeTruthy()
    })

    it('sidebar should not have class "open" when sidebarOpen$ is false', () => {
        sidebarOpen$.setResult(false)
        store.refreshState();
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.open'))).toBeFalsy()
    })

    afterAll(() => { fixture.nativeElement.remove()})
})