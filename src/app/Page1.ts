import {Component} from "angular2/core";

import LittleTour from './page1_components/littleHero';
import FormObservable from './rx_components/formObservable';
import RxTest from './rx_components/rxTest';
import Websocket from './websocket/Websocket';

@Component({
    selector: "page1",
    template:  `
      <h1>Page 1</h1>

        <websocket></websocket>
        <rx-test></rx-test>
        <form-observable></form-observable>
        <little-tour></little-tour>
    `,
    directives: [LittleTour, RxTest, FormObservable, Websocket]
})
export default class Page1 {

}
