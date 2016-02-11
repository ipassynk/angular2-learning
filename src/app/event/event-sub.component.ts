import {Component, EventEmitter, Input, Output} from 'angular2/core';

import EventService from './event.service';

@Component({
  selector: 'event-sub',
  template: `
        <div>
            Subscription: {{ eventService.channel | async }}
        </div>
    `
})
export default class EventSub {
  constructor(private eventService:EventService) {
  }
}
