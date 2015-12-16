import {Component, EventEmitter, Input, Output, CORE_DIRECTIVES} from "angular2/angular2";

@Component({
    selector: "item-list",
    template: `
        <div style="border:2px solid blue;">
            <h3>{{ title }} </h3>
            <ul>
                <li *ng-for="#p of items">
                    <label><input type="checkbox" (click)="update($event, p)" [checked]="state==='y'"/>{{ p }}</label>
                </li>
            </ul>
        </div>
    `,
    input: ['title', 'items', 'state'],
    outputs: ['switchStatus: statusChange'],
    directives: [CORE_DIRECTIVES]
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
