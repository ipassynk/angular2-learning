import {Component, ChangeDetectionStrategy} from 'angular2/core';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';
import {Observable} from 'rxjs/Observable';
import {NgForm, NgControl, FORM_DIRECTIVES, Control}  from 'angular2/common';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';

@ComponentDescriptionDecorator('Timer with expiration')
@Component({
    selector: 'timeout',
    template: `
        <div>Timer: {{ timeout$ | async }}</div>
        <div>Is done: {{ done$ | async }}</div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TimeoutCmp {
    private timeout$: Observable<any>;
    private done$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {
        this.timeout$ =
            Observable.interval(1000)
                .map(x=>x + 1)
                .takeUntil(Observable.timer(9000));

        this.timeout$.subscribe(()=> {
        }, ()=> {
        }, ()=> {
            this.done$.next(true);
        });
    }
}
