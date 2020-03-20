import {NgModule} from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';

@NgModule({
    declarations:[
        SidebarComponent, 
        SidebarItemComponent
    ],
    exports:[
        SidebarComponent
    ]
})

export class SidebarModule {}