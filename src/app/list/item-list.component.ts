import {Component, EventEmitter, Input, Output} from "angular2/core";

@Component({
    selector: "item-list",
    template: `
        <div style="border:1px solid black; margin:10px;padding:10px;">
            <h4>{{ title }}</h4>
            <ul>
                <li *ngFor="#item of items">
                    <label><input type="checkbox" (click)="update($event, item)" [checked]="state==='y'"/>{{ item }}</label>
                </li>
            </ul>
        </div>
    `
    //inputs: ['title', 'items', 'state'],
    //outputs: ['switchStatus: statusChange']
})
export default class ItemList {
    @Input() title;
    @Input() items;
    @Input() state;
    @Output('status-change') switchStatus = new EventEmitter();

    //private switchStatus:EventEmitter<any> = new EventEmitter<any>();

    update(value, name) {
        this.switchStatus.emit({value: event.target.checked, name: name});
    }
}
