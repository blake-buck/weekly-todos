import { TestBed } from "@angular/core/testing"
import { TaskDialogComponent } from '../weekly-tasks-module/task-dialog/task-dialog.component'
import { CommonModule } from '@angular/common'
import { AppStore, initialState } from '../store/app.state'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { selectTaskDialogOpen, selectSelectedTask } from '../store/app.selectors'
import { By } from '@angular/platform-browser'

describe('TaskDialog', () => {

    let store:MockStore<AppStore>;
    let fixture;
    let dialogOpen$;
    let selectedTask$;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[
                CommonModule
            ],
            declarations:[
                TaskDialogComponent
            ],
            providers:provideMockStore({initialState:{app:initialState}})
        })

        fixture = TestBed.createComponent(TaskDialogComponent);
        store = TestBed.inject(MockStore);

        dialogOpen$ = store.overrideSelector(
            selectTaskDialogOpen,
            true
        )

        selectedTask$ = store.overrideSelector(
            selectSelectedTask,
            {
                week:'1-2000',
                day: 'Monday',

                time:'',
                taskText:'blah blah blah',

                backgroundColor:'',
                complete:false,
                isEditing:true,
                id:0
            }
        )

        fixture.detectChanges()
    })

    it('if dialogOpen$ is true, div.dialog-backdrop should have a class of "open"', () => {
        expect(fixture.debugElement.query(By.css('div.dialog-backdrop.open'))).toBeTruthy();
    })

    it('if selectedTask$ is falsy, div.dialog-backdrop should not be in DOM', () => {
        selectedTask$ = store.overrideSelector(
            selectSelectedTask,
            null
        )
        
        store.refreshState()
        fixture.detectChanges()

        expect(fixture.debugElement.query(By.css('div.dialog-backdrop'))).toBeFalsy()
    })

    it('textarea value should equal task.taskText', () => {
        expect(fixture.debugElement.query(By.css('textarea')).nativeElement.value).toEqual('blah blah blah');
    })

    afterAll(() => { fixture.nativeElement.remove()})
})