import {Component, EventEmitter, Output} from "angular2/core";
import SearchService from '../services/SearchService';

@Component({
    selector: "search-box",
    template:  `
        <input type="text" #filter>
        <button (click)="update(filter.value)">UpdateFilter</button>
    `
})
export default class SearchBox {
    constructor(private searchService: SearchService) {
    }

    update(value) {
        this.searchService.filter.emit(value);
    }
}