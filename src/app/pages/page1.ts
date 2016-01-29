import {Component} from "angular2/core";

import LittleTour from '../page1_components/little_hero.component';
import FormObservable from '../rx_components/form-observable.component';
import RxTest from '../rx_components/rx-test.component';

@Component({
    selector: "page1",
    template:  `
      <h1>Page 1</h1>

        <websocket></websocket>
        <rx-test></rx-test>
        <form-observable></form-observable>
        <little-tour></little-tour>
    `,
    directives: [LittleTour, RxTest, FormObservable]
})
export default class Page1 {

}
