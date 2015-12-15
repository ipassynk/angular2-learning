import {Component} from "angular2/angular2";

import SearchBox from "./SearchBox";

@Component({
    selector: "page3",
    template: `
        <h1>Page 3</h1>

        <div class="well">
        Child updated filter: {{ filter }}
        </div>
        <hr>
        <search-box (filter-change)="onUpdate($event)"></search-box>
    `
    ,directives:[SearchBox]
})
export default class Page3 {
    public filter:string;

    onUpdate(value) {
        debugger;
        this.filter = value;
    }
}
