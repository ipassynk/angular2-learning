import {Component} from "angular2/angular2";

import LittleTour from './page1_components/littleHero';

@Component({
    selector: "page1",
    template:  `
      <h1>Page 1</h1>

        <little-tour></little-tour>
    `,
    directives: [LittleTour]
})
export default class Page1 {

}
