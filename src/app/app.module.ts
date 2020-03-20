import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeeklyTasksModule } from './weekly-tasks-module/weekly-tasks.module';
import { SidebarModule } from './sidebar-module/sidebar.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { AppEffects } from './store/app.effects';
import {EffectsModule} from '@ngrx/effects'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({app:appReducer}),
    BrowserModule,
    SidebarModule,
    WeeklyTasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
