import {Component} from 'angular2/core';
import {Subject} from "rxjs/Subject";
import {ChangeDetectionStrategy} from "angular2/core";
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator";

@ComponentDescriptionDecorator('Mouse RX events with angular atyle attr binding')
@Component({
  selector: 'drug-rx',
  styles: [`
    .box {
        padding: 20px;
        border: 3px dashed #b7178c;
        height: 200px;
      }

      .box img {
        height: 60px;
        position: absolute;
      }
  `],
  template: `
        <h3>Drag the cursor inside the red box and on course up the picture will follow</h3>
        <div class="box" (mousedown)="mousedown$.next($event)" (mouseup)="mouseup$.next($event)" (mousemove)="mousemove$.next($event)">
            <img [style.left]="left$ | async" [style.top]="top$ | async"
                  src="http://reactivex.io/assets/Rx_Icon.png">
        </div>
    `
  , changeDetection: ChangeDetectionStrategy.OnPushObserve
})
export default class DragRx {
  mousedown$:Subject<MouseEvent> = new Subject<MouseEvent>();
  mouseup$:Subject<MouseEvent> = new Subject<MouseEvent>();
  mousemove$:Subject<MouseEvent> = new Subject<MouseEvent>();
  top$:Subject<string> = new Subject<string>();
  left$:Subject<string> = new Subject<string>();

  constructor() {
    this.mousedown$
      .flatMap(x=>
        this.mousemove$
          .takeUntil(this.mouseup$)
      )
      .subscribe((e:MouseEvent) => {
        this.left$.next(e.clientX + 50 + "px");
        this.top$.next(e.clientY + 50 + "px");
      });
  }
}
