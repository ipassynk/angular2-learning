import {Component, ChangeDetectionStrategy} from "angular2/core";
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator";
import {Observable} from "rxjs/Observable";
import {NgForm, NgControl, FORM_DIRECTIVES, Control}  from 'angular2/common';
import {Subject} from "rxjs/Subject";

@ComponentDescriptionDecorator("Button state is controlled using combination of observables")
@Component({
    selector: "async-filter",
    template: `
        <p>Button is disabled while email and password less than 5 chars</p>
        <label>Email<input [ngFormControl]="email"></label>
        <label>Password<input [ngFormControl]="password"></label>
        <button [disabled]="btnState$ | async">Register</button> Button disabled: {{ btnState$ |async }}
    `,
    directives: [FORM_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ButtonControl {
    public email:Control;
    public password:Control;
    public btnState$:Observable<boolean>;

    constructor() {
        this.email = new Control();
        this.password = new Control();

        this.btnState$ = Observable.combineLatest(this.email.valueChanges, this.password.valueChanges,
            (email, password) => {
                return !(email.length > 5 && password.length > 5);
            })
            .debounceTime(1000)
            .startWith(true);
    }
}
