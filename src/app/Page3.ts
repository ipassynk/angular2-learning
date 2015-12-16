import {Component} from "angular2/angular2";

import SearchBox from "./SearchBox";
import ItemList from "./ItemList";

@Component({
    selector: "page3",
    template: `
        <h1>Page 3</h1>

        <div style="border:2px solid red">
            <div class="well">
                Search box value: {{ filter }}
            </div>
            <hr>
            <search-box (filter-change)="onUpdate($event)"></search-box>
            <item-list title="Active status" [items]="activeItems" (status-change)="aStatus($event)" state="y"></item-list>
            <item-list title="Passive status" [items]="passiveItems" (status-change)="pStatus($event)" state="n"></item-list>
        </div>
    `
    ,directives: [SearchBox, ItemList]
})
export default class Page3 {
    public filter:string;
    public activeItems:Array<string> = ["bluberry", "banana"];
    public passiveItems:Array<string> = ["apple", "orange"];

    onUpdate(value) {
        this.filter = value;
    }

    pStatus(val) {
        this.passiveItems = this.passiveItems.filter((n)=> n !== val.name);
        this.activeItems.push(val.name);
    }

    aStatus(val) {
        this.activeItems = this.activeItems.filter((n)=> n !== val.name);
        this.passiveItems.push(val.name);
    }

}
