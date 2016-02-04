import {Component, EventEmitter, Output} from "angular2/core";
import EventService from './event.service';

@Component({
    selector: "event-pub",
    template:  `
        Publisher: <input type="text" #text>
        <button (click)="update(text.value)" class="btn btn-primary btn-sm">Publish</button>
    `
})
export default class EventPub {
    constructor(private eventService: EventService) {
    }

    update(value) {
        this.eventService.channel.emit(value);
    }
}