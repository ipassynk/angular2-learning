import {Component, EventEmitter, Input, Output} from 'angular2/core';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';
import {ChangeDetectionStrategy} from 'angular2/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {NgForm, NgControl, FORM_DIRECTIVES, Control}  from 'angular2/common';
import {BehaviorSubject} from 'rxjs/Rx';

class Fruit {
    constructor(public name: string, public color: string) {
    }
}

@ComponentDescriptionDecorator('Async collection filter example. Use rxjs to filter valueChanges')
@Component({
    selector: 'async-filter',
    template: `
        <div>
            <select [ngFormControl]="color">
                <option>red</option>
                <option>yellow</option>
                <option>green</option>
            </select>
            <br>Filtered values:
            <ul>
                <li *ngFor="#item of items | async">{{ item.name }}</li>
            </ul>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [FORM_DIRECTIVES]
})
export default class AsyncFilter {
    public color: Control;
    private initItems: Array<Fruit> = [new Fruit('apple', 'yellow'),
                                      new Fruit('kiwi', 'green'),
                                      new Fruit('banana', 'yellow')];
    private items: BehaviorSubject<Array<Fruit>> = new BehaviorSubject<Array<Fruit>>(null);

    constructor() {
        this.color = new Control();

        this.color.valueChanges
            .startWith(this.color.value)
            .map(c => {
               return c ? this.initItems.filter((f: Fruit) => f.color === c) : this.initItems;
            })
            .subscribe(x => this.items.next(x));
    }
}
