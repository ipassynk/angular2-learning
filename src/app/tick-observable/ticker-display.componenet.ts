import {Component, Input} from 'angular2/core';
import Ticker from './ticker.service';
import {OnInit} from 'angular2/core';
import 'rxjs/operator/throttleTime';
import {Subject} from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'ticker-display',
  template: `
        Here is the tick {{ tick$ | async }}. <button class="btn btn-primary-outline" (click)="restart()">Restart</button>
    `
})
export default class TickerDisplay {
  @Input() delay;
  tick$:Observable<number>;
  click$:Subject<number>;

  constructor(private ticker:Ticker) {
    this.click$ = new Subject<number>();

    this.tick$ = this.click$
      .startWith(null)
      .switchMap(() => {
        return this.ticker.tick
          .throttleTime(this.delay)
          .take(10);
      });
      //.do(x => console.log(`delay:${this.delay} tick:${x}`))
      //.subscribe((x) => this.tick = x);
  }

  restart() {
    this.click$.next(null);
  }
}
