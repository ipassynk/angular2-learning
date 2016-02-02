import {Component} from "angular2/core";

import Panel from "./panel.component";

@Component({
    selector: 'host',
    template: `
      <panel>I am {{ transcluded }} content!!!</panel>
    `
    ,directives: [Panel]
})
export default class Host {
    transcluded: string = 'xxxx';
}