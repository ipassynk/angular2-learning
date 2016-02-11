import {EventEmitter, Injectable} from 'angular2/core';

@Injectable()
export default class EventService {
    channel:EventEmitter<any>;

    constructor() {
        this.channel = new EventEmitter<any>();
    }
}
