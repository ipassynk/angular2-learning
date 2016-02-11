import {Component} from 'angular2/core';

import ItemList from './item-list.component';
import ItemService from './item.service';
import ComponentDescriptionDecorator from '../decorator/conponent-description.decorator';

const desc = 'Two lists moves data between each other. Shows input/output parameters interaction';
@ComponentDescriptionDecorator(desc)
@Component({
  selector: 'list',
  template: `
        <div>
            <item-list title="Active status" [items]="activeItems"
                (status-change)="aStatus($event)" state="y"></item-list>
            <item-list title="Passive status" [items]="passiveItems"
                (status-change)="pStatus($event)" state="n"></item-list>
        </div>
    `
  , directives: [ItemList]
  , viewProviders: [ItemService]
})
export default class List {
  public activeItems:Array<string> = this.itemService.activeItems;
  public passiveItems:Array<string> = this.itemService.passiveItems;

  constructor(public itemService:ItemService) {
  }

  pStatus(val) {
    this.itemService.pStatus(val);
  }

  aStatus(val) {
    this.itemService.aStatus(val);
  }
}
