import {Component, ChangeDetectionStrategy} from "angular2/core";
import {NgForm, NgControl, FORM_DIRECTIVES, Control}  from 'angular2/common';
import { Observable } from "rxjs/Rx";

@Component({
	selector: 'form-observable',
	template: `
	    <h2>FormObservable</h2>
		<form>
			<input type="text" [ngFormControl]="name"/>
		async val: {{x | async}}
		</form>
	`,
	changeDetection: ChangeDetectionStrategy.OnPushObserve,
	directives: [FORM_DIRECTIVES]
})
export default class FormObservable {
	public x:Observable<any>;
	public name:Control;

	constructor () {
		this.name = new Control();
		this.x = this.name.valueChanges
		    .map(x=>x.toUpperCase() + x.length)
			.do(x => console.log(x));
	}
}