import {Injectable} from "angular2/core";

import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

export class Item {
    constructor(public name:string, public checked:boolean) {
    }
}

@Injectable()
export class ObservableItemService {
    private initItems:Array<Item> = [
        new Item("blueberry", true),
        new Item("banana", true),
        new Item("apple", false),
        new Item("orange", false)
    ];
    public  store:BehaviorSubject<Array<Item>> = new BehaviorSubject<Array<Item>>(this.initItems);
    public  dispatcher:Subject<Item> = new Subject<Item>(null);
    private reduce = new Subject<Item>(null);

    constructor() {
        this.reduce
            .scan((items:Array<Item>, item)=> {
                let i = items.findIndex((x:Item)=>x.name === item.name);
                return [...items.slice(0, i),
                    item,
                    ...items.slice(i + 1)
                ];
            }, this.initItems)
            .subscribe((s:Array<Item>) => this.store.next(s));

        this.dispatcher.subscribe(x=>this.reduce.next(x));
    }
}