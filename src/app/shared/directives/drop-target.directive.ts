import { Directive, ElementRef, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/app.state';
import { selectTaskById } from 'src/app/store/app.selectors';
import { first } from 'rxjs/operators';
import { changeTask } from 'src/app/store/app.actions';

@Directive({
    selector:'[dropTarget]'
})

export class DropTargetDirective{
    @Input() dayOfWeek:string;

    constructor(private el:ElementRef, private store:Store<AppStore>){}

    ngOnInit(){
        let element = this.el.nativeElement;
        element.ondragover = e => {
            e.preventDefault()
        }
        element.ondrop = e => {
            e.preventDefault();
            let draggedTargetId = +e.dataTransfer.getData('text/plain');

            this.store
                .select(
                    selectTaskById(draggedTargetId)
                )
                .pipe(
                    first()
                )
                .subscribe(task => {
                    this.store.dispatch(changeTask({task: {...task, day:this.dayOfWeek}}))
                })
        }
    }
    
}