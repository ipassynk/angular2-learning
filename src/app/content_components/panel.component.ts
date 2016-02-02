import {Component} from "angular2/core";

@Component({
    selector: 'panel',
    template: `
        <div clas="well">
            <h1>Hi Panel</h1>
            <ng-content></ng-content>
        </div>
    `
})
export default class Panel {
}
