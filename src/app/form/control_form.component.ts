import {Component} from 'angular2/core';
import {FORM_PROVIDERS, FormBuilder}    from 'angular2/common';

@Component({
    selector: 'control-form',
    template: `
       <form [ngFormModel]='myForm'>
           <label>Rate <input type="checkbox" ngControl="rate" #rate="ngForm"></label>
           <label>Location <input type="checkbox" ngControl="location" #location="ngForm"></label>
           <label>Address <input type="text" ngControl="address" #address="ngForm"></label>
       </form>
    `
})
export default class ControlFormComponent {
   private myForm: any;

    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
            'rate': '',
            'location': '',
            'address': ''
        });
    }

/*    get selectedField() {
        return Object.keys(this.myForm.controls)
            .filter((key)=>this.myForm.controls[key].value);
    }*/
}
