import {NgModule} from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';
import { CommonModule } from '@angular/common';
import { WeeklyTasksModule } from '../weekly-tasks-module/weekly-tasks.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[
        CommonModule,
        SharedModule
    ],
    declarations:[
        SidebarComponent, 
        SidebarItemComponent
    ],
    exports:[
        SidebarComponent
    ]
})

export class SidebarModule {}