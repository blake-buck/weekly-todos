import { Component, Input } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/app.state';
import { setSelectedWeek } from 'src/app/store/app.actions';

@Component({
    selector:'sidebar-item',
    templateUrl:'./sidebar-item.component.html',
    styleUrls:['./sidebar-item.component.scss']
})

// displays a formatted week -- clicking this item sets that week as the selected week

export class SidebarItemComponent{
    @Input() week:string;

    constructor(private store:Store<AppStore>){}

    selectWeek(week:string){
        this.store.dispatch(setSelectedWeek({week}))
    }
}