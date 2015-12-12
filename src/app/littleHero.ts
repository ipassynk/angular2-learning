import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import heroService from "./heroService";

@Component({
    selector: 'little-tour',
    template: `
        <div [hidden]="hidden" class="alert alert-success">
            New hero is added!
        </div>
        <input #new-hero (keyup.enter)="addHero(newHero)">
        <button class="btn btn-primary" (click)="addHero(newHero)">Add Hero</button>
        <ul><li *ng-for="#hero of heroService.heroes"> Hero name: {{ hero }}</li></ul>
    `,
    directives: [CORE_DIRECTIVES]
})
export default class LittleTour {
    public hidden:boolean = true;

    constructor(public heroService:heroService) {
    }

    addHero(newHero) {
        this.hidden = false;

        if (newHero.value) {
            this.heroService.addHero(newHero.value);
            newHero.value = null;
        }
    }
}