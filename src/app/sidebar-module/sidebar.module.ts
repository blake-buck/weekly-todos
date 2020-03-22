import {NgModule} from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';
import { CommonModule } from '@angular/common';
import { WeeklyTasksModule } from '../weekly-tasks-module/weekly-tasks.module';
import { OrderByDatePipe } from './sidebar/orderByDate.pipe';

@NgModule({
    imports:[
        CommonModule,
        WeeklyTasksModule
    ],
    declarations:[
        SidebarComponent, 
        SidebarItemComponent,
        OrderByDatePipe
    ],
    exports:[
        SidebarComponent
    ]
})

export class SidebarModule {}