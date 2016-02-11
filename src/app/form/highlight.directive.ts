import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[highlight]'
})
export default class Highlight {
  constructor(el:ElementRef, renderer:Renderer) {
    renderer.setElementStyle(el, 'backgroundColor', 'yellow');
  }
}
