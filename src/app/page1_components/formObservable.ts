import {Component, FormBuilder, ControlGroup, Control,ChangeDetectionStrategy, CORE_DIRECTIVES, FORM_DIRECTIVES, Observable}
		from "angular2/angular2";

@Component({
	selector: 'form-observable',
	template: `
	    <h2>FormObservable</h2>
		<form [ng-form-model]="searchForm">
			<input type="text" ng-control="name"/>
			async val: {{x | async}}
		</form>
	`,
	changeDetection: ChangeDetectionStrategy.OnPushObserve,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export default class FormObservable {
	public x:Observable;
	public name:any;
	searchForm: ControlGroup;

	constructor(fb:FormBuilder) {
		this.searchForm = new ControlGroup({
			name: new Control(""),
		});
		this.x = this.searchForm.controls.name.valueChanges
		    .map(x=>x.toUpperCase() + x.length).do(x => console.log(x));
	}
}