import {Component} from "angular2/core";

import Ticker from "./ticker.service";
import TickerDisplay from "./ticker-display.componenet";
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator"

@ComponentDescriptionDecorator("Observable that emits ticks on in a service and two components subscribe to the observable and debounce ticks based provided configuration")
@Component({
    selector: 'ticker-list',
    template: `
      Here is 1000 sec display: <ticker-display [delay]="'1000'"></ticker-display>
      <br>
      Here is 5000 sec display: <ticker-display [delay]="'5000'"></ticker-display>
    `
    , directives: [TickerDisplay]
    , viewProviders: [Ticker]
})
export default class TickerList {
}