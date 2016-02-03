import {Component} from "angular2/core";

import Child from "./child.component";

@Component({
    selector: 'parent',
    template: `
       <div>
         <h3>Parent</h3>
         <button (click)="updateInput()" name="button" class="btn btn-primary">Update Inputs</button>
         <div>Output {{ out }}</div>
         <child [inp]="inp" (out)="updateOutput()"></child>
       </div>
  `,
    directives: [Child]
})
export default class Parent {
    inp:number = 0;
    out:number = 0;

    updateInput() {
        this.inp++;
    }

    updateOutput() {
        this.out++;
    }
}