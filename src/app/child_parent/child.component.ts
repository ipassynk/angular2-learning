import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'child',
    template: `
       <div>
         <h3>Child</h3>
         <div>Here is input {{ inp }}</div>
         <button (click)="updateOutput()" name="button">Update Output</button>
       </div>
  `
})
export default class Child {
    @Input() inp;
    @Output() out = new EventEmitter();
    i:number;
    updateOutput() {
        this.out.emit(this.i++);
    }
}