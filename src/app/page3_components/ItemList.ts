import {Component, EventEmitter, Input, Output} from "angular2/core";

@Component({
    selector: "item-list",
    template: `
        <div style="border:2px solid blue;">
            <h3>{{ title }} </h3>
            <ul>
                <li *ngFor="#p of items">
                    <label><input type="checkbox" (click)="update($event, p)" [checked]="state==='y'"/>{{ p }}</label>
                </li>
            </ul>
        </div>
    `,
    inputs: ['title', 'items', 'state'],
    outputs: ['switchStatus: statusChange']
})
export default class ItemList {
    @Input() title;
    @Input() items;
    @Input() state;

    private switchStatus:EventEmitter<any> = new EventEmitter<any>();

    update(value, name) {
        this.switchStatus.emit({value: event.target.checked, name: name});
    }
}
