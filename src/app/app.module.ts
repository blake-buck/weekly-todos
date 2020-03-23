import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeeklyTasksModule } from './weekly-tasks-module/weekly-tasks.module';
import { SidebarModule } from './sidebar-module/sidebar.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { AppEffects } from './store/app.effects';
import {EffectsModule} from '@ngrx/effects'
import { CommonModule } from '@angular/common';
import { AppService } from './store/app.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({app:appReducer}),
    BrowserModule,
    SidebarModule,
    WeeklyTasksModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
