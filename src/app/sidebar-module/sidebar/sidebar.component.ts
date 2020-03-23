import { Component } from "@angular/core";
import { AppStore } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { selectSidebarOpen, selectWeeksWithTasksInThem } from 'src/app/store/app.selectors';
import { toggleSidebar } from 'src/app/store/app.actions';

@Component({
    selector:'sidebar',
    templateUrl:'./sidebar.component.html',
    styleUrls:['./sidebar.component.scss']
})

export class SidebarComponent{
    constructor(private store:Store<AppStore>){}
    sidebarOpen$ = this.store.select(selectSidebarOpen);
    weeksWithTasksInThem$ = this.store.select(selectWeeksWithTasksInThem);

    toggleSidebar(){
        this.store.dispatch(toggleSidebar());
    }
}