import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {NgForm, NgControl, FORM_DIRECTIVES, Control}  from 'angular2/common';
import {Observable} from 'rxjs/Rx';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';

@ComponentDescriptionDecorator('Use observable for bind to input and display data from the observable')
@Component({
    selector: 'form-observable',
    template: `
      <form>
        <input type="text" [ngFormControl]="name"/> async val: {{x | async}}
      </form>
    `,
    changeDetection: ChangeDetectionStrategy.OnPushObserve,
    directives: [FORM_DIRECTIVES]
})
export default class FormObservable {
    public x: Observable<any>;
    public name: Control;

    constructor() {
        this.name = new Control();
        this.x = this.name.valueChanges
            .map(x => {
                return (x.length % 2 === 0 ? x.toUpperCase() : x.toLowerCase());
            })
            .do(x => console.log(x));
    }
}
