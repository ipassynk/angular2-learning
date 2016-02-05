import {Component, EventEmitter, Input, Output} from "angular2/core";
import {Item} from "./item.service"

@Component({
    selector: "observable-item-list",
    template: `
        <div style="border:1px solid black; margin:10px;padding:10px;">
            <h4>{{ title }}</h4>
            <ul>
                <li *ngFor="#item of items| async">
                    <label><input type="checkbox" (click)="update($event, item)" [checked]="state==='y'"/>{{ item.name }}</label>
                </li>
            </ul>
        </div>
    `
})
export default class ObservableItemList {
    @Input() title;
    @Input() items;
    @Input() state;
    @Output() toggle = new EventEmitter<Item>();

    update(event, {name}) {
        this.toggle.emit(new Item(name, event.target.checked));
    }
}
