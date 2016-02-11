import {Component, OnInit, ChangeDetectionStrategy} from "angular2/core";
import { Observable, Subject } from "rxjs/Rx";
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator";

interface Item{
    id: number;
}

@ComponentDescriptionDecorator("Observable from button click combine with Observable.interval")
@Component({
    selector: 'click-observable',
    changeDetection: ChangeDetectionStrategy.OnPushObserve,
    template: `
       <div>
         <h3>ClickObservable</h3>
         <button (click)="clickStream.next($event)" name="button" class="btn btn-primary">Click Me</button>
         <ul>
           <li *ngFor="#item of items | async">{{item.id}}</li>
         </ul>
       </div>
  `
})
export default class ClickObservable {
    public items:Observable<Array<Item>>;
    public clickStream = new Subject<any>();

    ngOnInit():void {
        let mapClick$ = this.clickStream.map(x=>x.target.name);
        this.items = Observable.interval(1000)
            .take(10)
            .combineLatest(mapClick$)
            .map(x=>[{id:x}])
            .do(x => console.log(x))
            .scan((all, obj) => all.concat(obj), []);
            //.do(x => console.log(x));
    }
}
