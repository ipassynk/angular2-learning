import {Directive, ElementRef, Renderer, Input} from 'angular2/angular2';

@Directive({
    selector: '[Highlight]'
})
export default class Highlight {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el, 'backgroundColor', 'yellow');
    }
}
