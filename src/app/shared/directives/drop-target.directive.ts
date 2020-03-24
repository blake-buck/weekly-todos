import { Directive, ElementRef, Input } from '@angular/core';
import { AppService } from 'src/app/store/app.service';

@Directive({
    selector:'[dropTarget]'
})

// used in week-column.component.html
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

            // get drag data
            let dragData = e.dataTransfer.getData('text/plain')

            // pass drag data and drop data into service function
            // Currently only tasks can be drag and dropped - if that changes this logic will need to change
            this.appService.onTaskDrop(dragData, JSON.stringify(this.dropData))
        }
    }
    
}