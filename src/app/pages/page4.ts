import {Component} from "angular2/core";

import Parent from '../child_parent_components/parent.component';

@Component({
    selector: "page4",
    template:  `
      <h1>Page 4</h1>

      <parent></parent>
    `,
    directives: [Parent]
})
export default class Page4 {

}
