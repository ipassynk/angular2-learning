import {Component} from "angular2/core";

import HeroFormComponent from "./hero_form.component";
import ControlFormComponent from "./control_form.component";
import Highlight from "./highlight.component";

@Component({
    selector: "just-form",
    template:  `
        <hero-form></hero-form>

        <hr [style.background]="'lime'" [style.height]="'10px'">

        <control-form #formctrl></control-form>

        <ul class="list-group">
            <li Highlight class="list-group-item" *ngFor="#p of formctrl.selectedField">
                {{ p }}
            </li>
        </ul>
    `,
    directives: [Highlight, ControlFormComponent, HeroFormComponent]
})
export default class Page2 {

}
