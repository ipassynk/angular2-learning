import {Observable} from 'rxjs/Rx';

export default class Ticker {
    tick: Observable<any>;

    constructor() {
        this.tick = Observable.interval(10);
    }
}
