import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector:'[draggableItem]'
})

// used in task.component.html
export class DragAndDropDirective{

    // Data must come in as a string, it can be parsed at the drop target
    @Input() transferData: string;

    constructor(el: ElementRef){
        let element = el.nativeElement;

        // make element draggable
        element.draggable = true;

        // when element is dragged, set the transfer data equal to the elements transfer data
        element.ondragstart = e => {
            e.dataTransfer.setData('text/plain', JSON.stringify(this.transferData))
        }
    }
}