import { Directive, ElementRef } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectTaskById, selectTasksByIds } from 'src/app/store/app.selectors';
import {take, merge, first} from 'rxjs/operators';
import { changeTask } from 'src/app/store/app.actions';

@Directive({
    selector:'[dragAndDrop]'
})

export class DragAndDropDirective{
    constructor(el: ElementRef, store:Store<{app:AppState}>){
        let element = el.nativeElement;
        element.draggable = true;

        element.ondragstart = e => {
            e.dataTransfer.setData('text/plain', e.target.getAttribute('data-id'))
        }
    }
}