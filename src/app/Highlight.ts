import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
    selector: '[Highlight]'
})
export  default class Highlight {
    constructor(el: ElementRef, renderer: Renderer) {
        debugger;
        renderer.setElementStyle(el, 'backgroundColor', 'yellow');
    }
}
