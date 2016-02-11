import {Component} from 'angular2/core';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';
import {Observable} from 'rxjs/Observable';

import ImmutableDisplay from './immutable-display.componet';


@ComponentDescriptionDecorator('Immutable data example with ChangeDetectionStrategy.OnPush')
@Component({
    selector: 'immutable-route',
    template: `
        <div>
           <immutable-display [data]="dataMutable" [title]="'Mutable'"></immutable-display>
           <immutable-display [data]="dataImmutable" [title]="'Immutable'"></immutable-display>
        </div>
    `,
    directives: [ImmutableDisplay]
})
export default class ImmutableRoute {
    dataImmutable;
    dataMutable;

    constructor() {
        this.dataImmutable = {x: ''};
        this.dataMutable = {x: ''};

        Observable.interval(1000).map(x => {
            this.dataImmutable = {x};
            this.dataMutable.x = x;
        }).subscribe();
    }
}
