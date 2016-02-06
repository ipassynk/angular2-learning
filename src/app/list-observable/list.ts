import {Component, ChangeDetectionStrategy} from "angular2/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

import ObservableItemList from "./item-list.component";
import {ObservableItemService, Item} from "./item.service"
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator";

const desc = `
Two lists move data between each other. Built using Observable.
Thanks to
<a target="_blank" href="http://victorsavkin.com/post/137821436516/managing-state-in-angular-2-applications">MANAGING STATE IN ANGULAR 2 APPLICATIONS</a>
`
@ComponentDescriptionDecorator(desc)
@Component({
    selector: "observable-list",
    template: `
        <div>
            <observable-item-list title="Checked status" [items]="check" (toggle)="toggle($event)"></observable-item-list>
            <observable-item-list title="Unchecked status" [items]="uncheck" (toggle)="toggle($event)"></observable-item-list>
        </div>
    `
    , directives: [ObservableItemList]
    , providers: [ObservableItemService]
    , changeDetection: ChangeDetectionStrategy.OnPushObserve
})
export default class ObservableList {
    constructor(private itemService:ObservableItemService) {
    }
    get check() {
        return this.itemService.store.map((x:Item[])=>x.filter(t => t.checked));
    }

    get uncheck() {
        return this.itemService.store.map((x:Item[])=>x.filter(t => !t.checked));
    }

    toggle($event) {
        this.itemService.dispatcher.next($event);
    }
}
