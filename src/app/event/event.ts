import {Component} from 'angular2/core';

import EventPub from './event-pub.component';
import EventSub from './event-sub.component';
import EventService from './event.service';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';

@ComponentDescriptionDecorator('Shows pub/sub for sibling components')
@Component({
    selector: 'just-event',
    template: `
        <div>
           <event-pub></event-pub>
           <event-sub></event-sub>
        </div>
    `
    ,directives: [EventPub, EventSub]
    ,viewProviders: [EventService]
})
export default class Event {

}
