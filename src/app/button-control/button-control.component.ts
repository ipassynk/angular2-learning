import {Component, ChangeDetectionStrategy} from "angular2/core";
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator";
import {Observable} from "rxjs/Observable";
import {NgForm, NgControl, FORM_DIRECTIVES, Control}  from 'angular2/common';

@ComponentDescriptionDecorator("Button state is controlled using combination of observables")
@Component({
    selector: "async-filter",
    template: `
        <label>Email<input [ngFormControl]="email"></label>
        <label>Password<input [ngFormControl]="password"></label>
        <button [disabled]="btnState">Register</button> Button disabled: {{ btnState }}
    `,
    directives: [FORM_DIRECTIVES]
})
export default class ButtonControl {
    public email:Control;
    public password:Control;
    public btnState:boolean = true;

    constructor() {
        this.email = new Control();
        this.password = new Control();

        Observable.combineLatest(this.email.valueChanges, this.password.valueChanges, (email, password) => {
            return email.length > 5 && password.length > 5;
        }).subscribe(x=> this.btnState = !x);
    }
}
