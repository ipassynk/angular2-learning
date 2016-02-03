import {Component, Input} from "angular2/core";

import Panel from "./panel.component";

@Component({
    selector: 'host',
    template: `
      <panel>
         <h3>I am header</h3>
         <div class="body">
            I am transcluded and interpolated {{ transcluded }} body!
            <br>
            and here it is my argument {{ name }}
         </div>
      </panel>
    `
    ,directives: [Panel]
})
export default class Host {
    @Input() name;
    transcluded: string = 'xxxx';
}