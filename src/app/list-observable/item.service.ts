import {Injectable} from "angular2/core";

import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

export class Item {
    constructor(public name:string, public checked:boolean) {
    }
}

export interface State {
    items:Array<Item>
}
const initItems:Array<Item> = [
    new Item("blueberry", true),
    new Item("banana", true),
    new Item("apple", false),
    new Item("orange", false)
];

@Injectable()
export class ObservableItemService {

    private  store$:BehaviorSubject<State> = new BehaviorSubject<State>({items:this.initItems});
    public  dispatcher$:Subject<Item> = new Subject<Item>(null);
    private reduce$ = new Subject<Item>(null);

    public items$ = this.store$.map((s:State) => s.items);

    constructor() {
        this.reduce$
            .scan((state:State, {name, checked})=> {
                let i = state.items.findIndex((x:Item)=>x.name === name);
                return {
                    items:
                        [...state.items.slice(0, i),
                        new Item(checked ? name.toUpperCase() : name.toLowerCase(), checked),
                        ...state.items.slice(i + 1)
                        ]
                };
            }, {items:initItems})
            .subscribe((s:State) => this.store$.next(s));

        this.dispatcher$.subscribe(x=>this.reduce$.next(x));
    }
}