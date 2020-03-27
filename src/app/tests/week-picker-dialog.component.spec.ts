import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AppStore, initialState } from "../store/app.state";
import { TestBed } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { selectWeekPickerDialogOpen, selectSelectedWeek } from "../store/app.selectors";
import { WeekPickerDialogComponent } from '../weekly-tasks-module/week-picker-dialog/week-picker-dialog.component';
import { WeeklyTasksModule } from '../weekly-tasks-module/weekly-tasks.module';
import { By } from '@angular/platform-browser';

describe('Week Picker Dialog', () => {

    let store:MockStore<AppStore>;
    let fixture;
    let dialogOpen$;
    let selectedWeek$;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[
                CommonModule,
                WeeklyTasksModule
            ],
            
            providers:provideMockStore({initialState:{app:initialState}})
        })

        fixture = TestBed.createComponent(WeekPickerDialogComponent);
        store = TestBed.inject(MockStore);

        dialogOpen$ = store.overrideSelector(
            selectWeekPickerDialogOpen,
            true
        )

        selectedWeek$ = store.overrideSelector(
            selectSelectedWeek,
            '1-2000'
        )

        fixture.detectChanges()
    })

    it('if dialogOpen$ is true, div.dialog-backdrop should have a class of "open"', () => {
        expect(fixture.debugElement.query(By.css('div.dialog-backdrop.open'))).toBeTruthy();
    })

    afterAll(() => { fixture.nativeElement.remove()})
})