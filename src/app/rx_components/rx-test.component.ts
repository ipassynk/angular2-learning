import {Component, OnInit, ChangeDetectionStrategy} from "angular2/core";
import { Observable, Subject } from "rxjs/Rx";

interface Item{
    id: number;
}

@Component({
    selector: 'rx-test',
    changeDetection: ChangeDetectionStrategy.OnPushObserve,
    template: `
       <div>
         <h3>RxTest</h3>
         <button (click)="clickStream.next($event)" name="button">Click Me</button>
         <ul>
           <li *ngFor="#item of items | async">{{item.id}}</li>
         </ul>
       </div>
  `
})
export default class RxTest {
    public items:Observable<Array<Item>>;
    public clickStream = new Subject();

    ngOnInit():void {
        let mapClick$ = this.clickStream.map(x=>x.target.name);
        this.items = Observable.interval(1000)
            .take(10)
            .combineLatest(mapClick$)
            .map(x=>[{id:x}])
            .do(x => console.log(x))
            .scan((all, obj) => all.concat(obj), [])
            //.do(x => console.log(x));
    }
}
