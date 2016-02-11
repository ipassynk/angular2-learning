import {Component, Input} from 'angular2/core';
import {ChangeDetectionStrategy} from 'angular2/core';

@Component({
  selector: 'immutable-display',
  template: `
        <div>
            <h3>{{ title }}</h3>
            data.x = {{ data.x }}
        </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ImmutableDisplay {
  @Input() data;
  @Input() title;
}
