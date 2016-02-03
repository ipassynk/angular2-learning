import {Component} from "angular2/core";

import Ticker from "./ticker.service";
import TickerDisplay from "./ticker-display.componenet";

@Component({
    selector: 'ticker-list',
    template: `
      Here is 1000 sec display: <ticker-display [delay]="'1000'"></ticker-display>
      <br>
      Here is 5000 sec display: <ticker-display [delay]="'5000'"></ticker-display>
    `
    ,directives: [TickerDisplay]
    ,viewProviders: [Ticker]
})
export default class TickerList {
}