import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Http}    from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';
import {resolve} from 'url';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Subject} from 'rxjs/Subject';

const cacheValue = {
  cache: 'my cached value'
};

const desc = 'Try http with all rxjs stuff like catch, retry, join several observable';
@ComponentDescriptionDecorator(desc)
@Component({
  selector: 'http-rxjs',
  template: `
        <div class="form-inline">
         <div class="form-group">
             <select #type class="form-control">
                <option value="r0">Fork several different observables like $q.all</option>
                <option value="r1">Retry immediately anyway</option>
                <option value="r3">Retry immediately anyway and return cached value</option>
                <option value="r2">Retry immediately and check error type</option>
                <option value="r4">Retry with delay forever</option>
                <option value="r5">Retry wrong url 3 times with different delay and call good url at the end</option>
            </select>
          </div>
          <button (click)="clickStream.next(type.value)" class="btn btn-primary">Click to load http observable</button>
        </div>
        <div class="well" *ngIf="data">
             <div>{{ data  | json }}</div>
        </div>
	`,
  providers: [HTTP_PROVIDERS]
})
export default class HttpRxjs {
  data:Object;
  clickStream:Subject<any> = new Subject<any>();
  observables = new Array<Observable<any>>();

  constructor(private http:Http) {
    this.observables['r0'] = function (http) {
      const promise$ = Observable.fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => resolve('resolve from promise'), 5000);
      }));

      const users$ = http.get('https://api.github.com/users').map(res => res.json()).map(x=>x.length);
      const users1$ = http.get('https://api.github.com/users/1').map(res => res.json()).map(x => {
        return {'avatar': x.avatar_url};
      });
      const users2$ = http.get('https://api.github.com/users/2').map(res => res.json()).map(x => {
        return {'organizations': x.organizations_url};
      });
      const timeout$ = Observable.never().timeout(1000).catch((err) => Observable.of([1, 2, 3]));
      const timer$ = Observable.timer(1000).map(x => {
        return {x};
      });
      return Observable.forkJoin(users$, promise$, timeout$, timer$, Observable.forkJoin(users1$, users2$));
    }(this.http);

    this.observables['r1'] = this.http.get('https://wrongurl.com')
      .map(res => res.json())
      .retry(1)
      .catch(err =>Observable.from([err]));

    this.observables['r3'] = this.http.get('https://wrongurl.com')
      .map(res => res.json())
      .retry(1)
      .catch(err =>Observable.from([cacheValue]));

    this.observables['r2'] = this.http.get('http://aaa.aaaacom')
      .map(res => res.json())
      .retryWhen(errors => errors.flatMap(error => {
        //debugger;
        //if (error.status!=2000) {
        //  return Observable.of(null);
        //}
        return Observable.throw(error);
      }));

    this.observables['r4'] = this.http.get('https://wrongurl.com')
      .map(res => res.json())
      .retryWhen(x=>x.delay(5000));

    this.observables['r5'] = this.http.get('https://wrongurl.com')
      .map(res => res.json())
      .retryWhen(errors =>
        errors
          .zip(Observable.range(1, 3), (_, i)=>i)
          .flatMap(i=> {
            if (i < 3) {
              let delay = i * 1000;
              console.log(`delay ${delay}`);
              return Observable.timer(delay);
            } else {
              return Observable.of(1);
            }
          })
      ).concat(
        this.http.get('https://api.github.com/users/ipassynk')
          .map(res => res.json())
          .map(x=>x.name)
      );

    this.clickStream
      .do(()=>this.data = null)
      .flatMap(type=>this.observables[type])
      .subscribe(x => this.data = x, err => this.data = err);
  }
}
