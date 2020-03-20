import { Component } from "@angular/core";
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { selectSidebarOpen } from 'src/app/store/app.selectors';
import { toggleSidebar } from 'src/app/store/app.actions';

@Component({
    selector:'sidebar',
    templateUrl:'./sidebar.component.html',
    styleUrls:['./sidebar.component.scss']
})

export class SidebarComponent{
    constructor(private store:Store<AppState>){}
    sidebarOpen$ = this.store.select(selectSidebarOpen);

    toggleSidebar(){
        this.store.dispatch(toggleSidebar());
    }
}