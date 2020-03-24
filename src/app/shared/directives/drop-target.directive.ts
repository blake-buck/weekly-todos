import { Directive, ElementRef, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/app.state';
import { selectTaskById } from 'src/app/store/app.selectors';
import { first } from 'rxjs/operators';
import { changeTask } from 'src/app/store/app.actions';
import { AppService } from 'src/app/store/app.service';

@Directive({
    selector:'[dropTarget]'
})

export class DropTargetDirective{

    @Input() dropData:any;

    constructor(private el:ElementRef, private appService:AppService){}

    ngOnInit(){
        let element = this.el.nativeElement;
        
        // preventing default means that the element can have a dragged item drop on it
        element.ondragover = e => {
            e.preventDefault()
        }
        
        element.ondrop = e => {
            e.preventDefault();

            // Currently on tasks can be drag and dropped - if that changes this logic will need to 
            // change

            // get drag data
            let dragData = e.dataTransfer.getData('text/plain')

            // pass drag data and drop data into service function
            this.appService.onTaskDrop(dragData, JSON.stringify(this.dropData))
        }
    }
    
}