import {Component, EventEmitter, Output} from "angular2/angular2";

@Component({
    selector: "search-box",
    template:  `
        <input type="text" #filter>
        <button (click)="update(filter.value)">UpdateFilter</button>
    `,
    outputs:['updateFilter: filterChange']
})
export default class SearchBox {
    private updateFilter:EventEmitter<any> = new EventEmitter<any>();

    update(value) {
        this.updateFilter.emit(value);
    }
}
