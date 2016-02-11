import {Injectable} from 'angular2/core';
import Hero from './../model/hero';

@Injectable()
export default class ItemService {
    public activeItems: Array<string> = ['bluberry', 'banana'];
    public passiveItems: Array<string> = ['apple', 'orange'];

    pStatus(val) {
        this.passiveItems.splice(this.passiveItems.indexOf(val.name), 1);
        this.activeItems.push(val.name);
    }

    aStatus(val) {
        this.activeItems.splice(this.activeItems.indexOf(val.name), 1);
        this.passiveItems.push(val.name);
    }
}
