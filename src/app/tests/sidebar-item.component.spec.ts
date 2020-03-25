import { SidebarItemComponent } from "../sidebar-module/sidebar-item/sidebar-item.component";
import { TestBed } from '@angular/core/testing';
import { FormatWeekPipe } from '../shared/pipes/format-week.pipe';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppStore, initialState } from '../store/app.state';

describe('SidebarItem', () => {
    let sidebarItem:SidebarItemComponent;
    let fixture;
    let comp;
    let store: MockStore<AppStore>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[

            ],
            declarations:[
                SidebarItemComponent,
                FormatWeekPipe
            ],
            providers:[
                provideMockStore({initialState:{app:initialState}}),
            ]
        })
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(SidebarItemComponent);

        comp = fixture.componentInstance;
        
        comp.week = '1-2000'

        fixture.detectChanges();
    })

    it('week should be formatted properly', () => {
        expect(fixture.debugElement.query(By.css('div')).nativeElement.textContent.trim()).toBe('Jan 03 - Jan 09, 2000');
    })

})