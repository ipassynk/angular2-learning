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
        <button (click)="clickStream.next($event)">Click to load</button>
        <div class="well" *ngIf="data">
             <div>{{ data  | json }}</div>
        </div>
	`,
    providers: [HTTP_PROVIDERS]
})
export default class HttpRxjs {
    data: Object;
    clickStream: Subject<any> = new Subject<any>();

    constructor(private http: Http) {

        const wrongurl$ = this.http.get('https://wrongurl.com')
            .map(res => res.json())
            .retry(1)
            .catch(
                (err) => {
                    return Observable.from([cacheValue]);
                }
            );
        const promise$ = Observable.fromPromise(new Promise((resolve, reject) => {
            setTimeout(() => resolve('resolve from promise'), 5000);
        }));
        const users$ = this.http.get('https://api.github.com/users').map(res => res.json());
        const users1$ = this.http.get('https://api.github.com/users/1').map(res => res.json());
        const users2$ = this.http.get('https://api.github.com/users/2').map(res => res.json());
        const timeout$ = Observable.never().timeout(1000).catch((err) => Observable.of([1, 2, 3]));
        const timer$ = Observable.timer(1000).map(x => {
            return {x};
        });

        this.clickStream
            .flatMap(() => Observable.forkJoin(wrongurl$, users$, promise$, timeout$, timer$,
                Observable.forkJoin(users1$, users2$)))
            .subscribe(x => this.data = x, err => this.data = err);
    }
}
