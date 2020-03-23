import { Component } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { toggleSidebar, getStateFromStorage } from './store/app.actions';
import { selectSidebarOpen } from './store/app.selectors';
import { AppStore } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store:Store<AppStore>){}

  ngOnInit(){
    this.store.dispatch(getStateFromStorage())
  }

  sidebarOpen$ = this.store.select(selectSidebarOpen)
  moment = moment;

  currentDay = moment().isoWeekday();
  currentWeek = moment().isoWeek();

  daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  toggleSidebar(){
    this.store.dispatch(toggleSidebar())
  }

}
