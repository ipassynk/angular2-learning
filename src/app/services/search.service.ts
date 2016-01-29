import {EventEmitter, Injectable} from "angular2/core";

@Injectable()
export default class SearchService {
     filter:EventEmitter<any>;

    constructor() {
        this.filter = new EventEmitter<any>();
    }
}