import {Component} from "angular2/angular2";

import LittleTour from './page1_components/littleHero';
import RxTest from './page1_components/rxTest';

@Component({
    selector: "page1",
    template:  `
      <h1>Page 1</h1>

        <rx-test></rx-test>
        <little-tour></little-tour>
    `,
    directives: [LittleTour, RxTest]
})
export default class Page1 {

}
