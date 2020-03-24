import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector:'[wtAutofocus]'
})

export class AutofocusDirective{
    constructor(el:ElementRef){
        if(!el.nativeElement.disabled){
            // if there is a task in saturday/sunday for a week, preventScroll prevents that task from 
            // getting autofocused everytime that week is selected
            setTimeout(() => el.nativeElement.focus({preventScroll:true}), 0)
        }
    }
}