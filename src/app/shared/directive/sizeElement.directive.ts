import { AfterContentInit, Directive, ElementRef } from "@angular/core";

@Directive({selector: '[sizeEl]'})
export class SizeElement implements AfterContentInit {
    constructor(private el: ElementRef) {
        console.log(this.el)
    }

    ngAfterContentInit(): void {
        
    }
}