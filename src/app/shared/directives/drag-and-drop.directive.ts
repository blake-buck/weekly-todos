import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[dragAndDrop]'
})

export class DragAndDropDirective{
    constructor(el: ElementRef){
        let element = el.nativeElement;
        element.draggable = true;

        element.ondragstart = e => {
            e.dataTransfer.setData('text/plain', e.target.getAttribute('data-id'))
        }
    }
}