import {Component, FORM_DIRECTIVES, ControlGroup, Control} from "angular2/angular2";

@Component({
    selector: 'control-form',
    template: `
       <form [ng-form-model]="form">
           <label>Rate <input type="checkbox" ng-control="rate"></label>
           <label>Location <input type="checkbox" ng-control="location"></label>
           <label>Address <input type="text" ng-control="location"></label>
       </form>
    `
})
export default class ControlFormComponent {
    form = new ControlGroup({
        rate: new Control(),
        location: new Control(),
        address: new Control()
    });

    get selectedField() {
        return Object.keys(this.form.controls)
            .filter((key)=>this.form.controls[key].value);
    }
}
