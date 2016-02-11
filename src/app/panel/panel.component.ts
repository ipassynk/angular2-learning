import {Component} from 'angular2/core';

@Component({
  selector: 'panel',
  template: `
        <div class="card card-success">
            <h4 class="card-header"><ng-content select="h4"></ng-content></h4>
            <div class="card-block">
                <p class="card-text">
                  <ng-content select=".body" [name]="Edit"></ng-content>
                </p>
            </div>
        </div>
    `
})
export default class Panel {
}
