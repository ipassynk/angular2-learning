import {Component, EventEmitter, Input, Output} from "angular2/core";
import LetterPipe from "./letter-pipe.component";
import SearchService from '../services/search.service';

@Component({
    selector: "item-list",
    template: `
        <div style="border:2px solid blue;">
            <h3>{{ title }} {{ currentDate | date | uppercase }}</h3>
            Filter: {{ searchService.filter | async }}
            <ul>
                <li *ngFor="#p of items | letterPipe:'apple'">
                    <label><input type="checkbox" (click)="update($event, p)" [checked]="state==='y'"/>{{ p }}</label>
                </li>
            </ul>
        </div>
    `,
    pipes: [LetterPipe],
    inputs: ['title', 'items', 'state'],
    outputs: ['switchStatus: statusChange']
})
export default class ItemList {
    currentDate = new Date();
    @Input() title;
    @Input() items;
    @Input() state;

    private switchStatus:EventEmitter<any> = new EventEmitter<any>();

    constructor(private searchService: SearchService) {
    }

    update(value, name) {
        this.switchStatus.emit({value: event.target.checked, name: name});
    }
}
