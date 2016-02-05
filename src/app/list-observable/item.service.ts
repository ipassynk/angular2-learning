import {Injectable} from "angular2/core";
import Hero from "./../model/hero";
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
    public store:BehaviorSubject<Array<Item>>;
    public dispatcher:Subject<Item> = new Subject<Item>(null);

    constructor() {
        this.store = new BehaviorSubject<Array<Item>>(this.initItems);
        let reduce = new Subject<Item>(null);
        reduce
            .scan((items:Array<Item>, item)=> {
                let i = items.findIndex((x:Item)=>x.name === item.name);
                return [...items.slice(0, i),
                    item,
                    ...items.slice(i + 1)
                ];
            }, this.initItems)
            .subscribe((s:Array<Item>) => this.store.next(s));

        this.dispatcher.subscribe(x=>reduce.next(x));
    }
}