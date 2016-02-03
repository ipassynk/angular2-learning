import {Component} from "angular2/core";

@Component({
    selector: 'panel',
    template: `
        <div clas="well">
            <ng-content select="h3"></ng-content>
            <ng-content select=".body" [name=Edit]></ng-content>
        </div>
    `
})
export default class Panel {
}
