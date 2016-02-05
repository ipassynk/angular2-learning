import {Component, Input, Query, Attribute, Optional} from "angular2/core";
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator";
import Panel from "./panel.component";

@ComponentDescriptionDecorator("Aka Angular 1 Transclude")
@Component({
    selector: 'panel-host',
    template: `
      <panel>
         <h4>I am header</h4>
         <div class="body">
            I am transcluded and interpolated {{ transcluded }} body!
            <br>
            and here it is my argument {{ name }}
         </div>
      </panel>
    `
    ,directives: [Panel]
})
export default class PanelHost {
    transcluded: string = 'transcluded';
    @Optional() @Attribute('name') name: string;
}