import {Component} from "angular2/angular2";

import LittleTour from './page1_components/littleHero';
import FormObservable from './page1_components/formObservable';
import RxTest from './page1_components/rxTest';

@Component({
    selector: "page1",
    template:  `
      <h1>Page 1</h1>

        <rx-test></rx-test>
        <form-observable></form-observable>
        <little-tour></little-tour>
    `,
    directives: [LittleTour, RxTest, FormObservable]
})
export default class Page1 {

}
