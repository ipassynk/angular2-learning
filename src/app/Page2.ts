import {Component} from "angular2/core";

import HeroFormComponent from "./page2_components/hero_form.component";
import ControlFormComponent from "./page2_components/control_form.component";
import Highlight from "./page2_components/highlight.component";

@Component({
    selector: "page2",
    template:  `
        <h1>Page 2</h1>
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
