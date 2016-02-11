import {Component} from 'angular2/core';

import Parent from './parent.component';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';

@ComponentDescriptionDecorator(`Child/Parent Input/Output communication`)
@Component({
  selector: 'child-parent',
  template: `
      <parent></parent>
    `,
  directives: [Parent]
})
export default class ChildParent {

}
