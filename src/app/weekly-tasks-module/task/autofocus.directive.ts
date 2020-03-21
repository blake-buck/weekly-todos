import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector:'[wtAutofocus]'
})

export class AutofocusDirective{
    constructor(el:ElementRef){
        if(!el.nativeElement.disabled){
            setTimeout(() => el.nativeElement.focus(), 0)
        }
    }
}