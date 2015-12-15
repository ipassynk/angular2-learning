import {Component} from "angular2/angular2";

import HeroFormComponent from "./hero-form";
import ControlFormComponent from "./control-form";
import Highlight from "./Highlight";

@Component({
    selector: "page2",
    template:  `
    <hero-form></hero-form>

    <hr [style.background]="'lime'" [style.height]="'10px'">

    <control-form #formctrl></control-form>

    <ul class="list-group">
        <li Highlight class="list-group-item" *ng-for="#p of formctrl.selectedField">
            {{ p }}
        </li>
    </ul>
`,
    directives: [Highlight, ControlFormComponent, HeroFormComponent]
})
export default class Page2 {

}
