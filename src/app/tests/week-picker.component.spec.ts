import { TestBed } from "@angular/core/testing"
import { WeekPickerComponent } from '../weekly-tasks-module/week-picker/week-picker.component'
import { FormatWeekPipe } from '../shared/pipes/format-week.pipe'
import { CommonModule } from '@angular/common'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { initialState, AppStore } from '../store/app.state'
import { By } from '@angular/platform-browser'
import { selectSelectedWeek } from '../store/app.selectors'

describe('WeekPickerComponent', () => {
    let store: MockStore<AppStore>
    let fixture;
    let selectedWeek$;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[
                WeekPickerComponent,
                FormatWeekPipe
            ],
            imports:[
                CommonModule
            ],
            providers:[
                provideMockStore({initialState:{app:initialState}})
            ]
        })

        fixture = TestBed.createComponent(WeekPickerComponent)
        
        store = TestBed.inject(MockStore);
        store.overrideSelector(
            selectSelectedWeek,
            '1-2000'
        )

        fixture.detectChanges();
    })
    
    it('week should be formatted properly', () => {
        expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent.trim()).toBe('Jan 03 - Jan 09, 2000');
    })
// 
    afterAll(() => { fixture.nativeElement.remove()})
})