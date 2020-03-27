import { TestBed } from "@angular/core/testing"
import { WeekColumnComponent } from '../weekly-tasks-module/week-column/week-column.component'
import { CommonModule } from '@angular/common'
import { AppStore, initialState } from '../store/app.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { WeeklyTasksModule } from '../weekly-tasks-module/weekly-tasks.module';

describe('Week Column Component', () => {

    let fixture;
    let comp;
    let store:MockStore<AppStore>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[
            ],
            imports:[
                CommonModule,
                WeeklyTasksModule
            ],
            providers:[
                provideMockStore({initialState:{app:initialState}})
            ]
        })

        fixture = TestBed.createComponent(WeekColumnComponent);

        comp = fixture.componentInstance;
        comp.dayOfWeek = 'Monday'

        store = TestBed.inject(MockStore)

        fixture.detectChanges()
    })

    it('dayOfWeek should be displaying', () => {
        comp.dayOfWeek = 'Monday'
        expect(fixture.debugElement.query(By.css('header')).nativeElement.textContent).toBe('Monday')
    })

    it('dayOfWeek should change according to @Input() value', () => {
        comp.dayOfWeek = 'Friday';
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('header')).nativeElement.textContent).toBe('Friday')
    })

    afterAll(() => { fixture.nativeElement.remove()})
})