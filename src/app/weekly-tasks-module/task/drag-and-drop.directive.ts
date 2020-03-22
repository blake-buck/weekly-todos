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
        
        // element.ondragover = e => {
        //     e.preventDefault()
        // }
        // element.ondrop = e => {
        //     console.log('NO, MY DROP')
        //     let draggedTargetId = +e.dataTransfer.getData('text/plain');
        //     let droppedTargetId = +e.target.getAttribute('data-id');

        //     store
        //         .select(
        //             selectTasksByIds([draggedTargetId, droppedTargetId])
        //         )
        //         .pipe(
        //             first()
        //         )
        //         .subscribe(tasks => {
        //             let draggedTargetTask = tasks.find(task => task.id === draggedTargetId)
        //             let droppedTargetTask = tasks.find(task => task.id === droppedTargetId)

        //             store.dispatch(changeTask({task: {...draggedTargetTask, day:droppedTargetTask.day}}))
        //         })
        // }
    }
}