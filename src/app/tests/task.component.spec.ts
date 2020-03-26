import { TestBed } from "@angular/core/testing";
import { TaskComponent } from '../weekly-tasks-module/task/task.component';
import { initialState, AppStore } from '../store/app.state';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('TaskComponent', () => {
    let store: Store<AppStore>;
    let fixture;
    let comp;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[
                TaskComponent
            ],
            providers:[
                provideMockStore({initialState:{app:initialState}})
            ]
        })

        fixture = TestBed.createComponent(TaskComponent);
        comp = fixture.componentInstance
        store = TestBed.inject(MockStore)

        comp.task = {
            id: 0,

            week:'1-2000',
            day:'Monday',
            
            taskText: 'blah blah blah',
            complete: false,
            backgroundColor:'',

            isEditing:false
        }

        fixture.detectChanges();
    })

    it('textarea should be disabled if task.isEditing = false', () => {
        // if readonly doesn't exist, it comes back as null, if it exists it comes back ""
        expect(fixture.debugElement.query(By.css('textarea')).nativeElement.getAttribute('readonly')).toBe("");
    })

    it('div should have class "written" if task.isEditing = false', () => {
        expect(fixture.debugElement.query(By.css('div')).nativeElement.classList.contains('written')).toBeTrue();
    })

    it('div should have class "complete" if task.complete=true', () => {
        comp.task = {
            ...comp.task,
            complete:true
        }
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('div')).nativeElement.classList.contains('complete')).toBeTrue();
    })

    it('task should have proper background colors', () => {
        comp.task = {
            ...comp.task,
            backgroundColor:'#5cb85c'
        }
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('div')).nativeElement.style.background).toBeTruthy();
        expect(fixture.debugElement.query(By.css('textarea')).nativeElement.style.background).toBeTruthy()
    })

    it('textarea value should equal task.taskText', () => {
        expect(fixture.debugElement.query(By.css('textarea')).nativeElement.value).toEqual(comp.task.taskText);
    })

})