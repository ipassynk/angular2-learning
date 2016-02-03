import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'child',
    template: `
       <div style="margin:40px; padding: 40px; background-color: #a3d7a3">
         <h3>Child</h3>
         <div>Here is input {{ inp }}</div>
         <button (click)="updateOutput()" name="button" class="btn btn-primary">Update Output</button>
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