import {Component} from "angular2/core";
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator"
import LittleTour from './little_hero.component';

@ComponentDescriptionDecorator("Simple Templates")
@Component({
    selector: "just-template",
    template:  `
        <little-tour></little-tour>
    `,
    directives: [LittleTour]
})
export default class Page1 {

}
