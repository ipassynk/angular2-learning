import {Component} from "angular2/angular2";

import LittleTour from './page1_components/littleHero';
import FormObservable from './page1_components/formObservable';

@Component({
    selector: "page1",
    template:  `
      <h1>Page 1</h1>
        <form-observable></form-observable>
        <little-tour></little-tour>
    `,
    directives: [LittleTour, FormObservable]
})
export default class Page1 {

}
