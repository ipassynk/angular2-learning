import {Component} from "angular2/core";

import SearchBox from "../page3_components/search-box.component";
import ItemList from "../page3_components/item-list.component";
import ItemService from "../services/item.service"

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
    public activeItems:Array<string> = this.itemService.activeItems;
    public passiveItems:Array<string> = this.itemService.passiveItems;

    constructor(public itemService: ItemService) {}

    onUpdate(value) {
        this.filter = value;
    }

    pStatus(val) {
        this.itemService.pStatus(val);
    }

    aStatus(val) {
        this.itemService.aStatus(val);
    }

}
