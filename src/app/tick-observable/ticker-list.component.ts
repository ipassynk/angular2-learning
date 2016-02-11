import {Component} from 'angular2/core';

import Ticker from './ticker.service';
import TickerDisplay from './ticker-display.componenet';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';

const desc =
  `Observable that emits ticks on in a service and two components
     subscribe to the observable and debounce ticks based provided configuration
    `;
@ComponentDescriptionDecorator(desc)
@Component({
  selector: 'ticker-list',
  template: `
      <ul class="list-group">
        <li class="list-group-item">
            Here is 1000 sec display: <ticker-display [delay]="'1000'"></ticker-display>
        </li>
        <li class="list-group-item">
            Here is 2000 sec display: <ticker-display [delay]="'2000'"></ticker-display>
        </li>
      </ul>
    `
  , directives: [TickerDisplay]
  , viewProviders: [Ticker]
})
export default class TickerList {
}
