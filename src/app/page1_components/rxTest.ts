import {Component, OnInit, View, CORE_DIRECTIVES,  ChangeDetectionStrategy} from 'angular2/angular2';
import {Observable, Subject} from 'angular2/angular2';

@Component({
    selector: 'rx-test',
    changeDetection: ChangeDetectionStrategy.OnPushObserve
})
@View({
    template: `
   <div>
     <h3>RxTest</h3>
     <button (click)="clickStream.next($event)">Click Me</button>
     <ul>
       <li *ng-for="#item of items | async">{{item.id}}</li>
     </ul>
   </div>
  `,
    directives: [CORE_DIRECTIVES]
})
export default class RxTest {
    public items:Observable<any>;
    public clickStream = new Subject();

    ngOnInit():void {
        this.items = Observable.interval(1000)
            .take(10)
            .merge(this.clickStream)
            .scan((all, obj) => all.concat(obj), []);
    }
}
