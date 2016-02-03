import {Component} from "angular2/core";

import LittleTour from './little_hero.component';

@Component({
    selector: "page1",
    template:  `
        <little-tour></little-tour>
    `,
    directives: [LittleTour]
})
export default class Page1 {

}
