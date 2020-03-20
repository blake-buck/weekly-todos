import {NgModule} from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule
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