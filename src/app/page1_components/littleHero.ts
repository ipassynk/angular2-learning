import {Component, CORE_DIRECTIVES} from "angular2/angular2";

import heroService from "./../services/heroService";
import Hero from "./../model/hero";
import heroRender from "./heroRender";

@Component({
    selector: 'little-tour',
    template: `
        <div [hidden]="hidden" class="alert alert-success">New hero is added!</div>
        <input #new-hero (keyup.enter)="addHero(newHero)">
        <button class="btn btn-primary" (click)="addHero(newHero)">Add Hero</button>
        <ul>
            <li *ng-for="#hero of heroService.heroes"><hero-render [hero]="hero"></hero-render></li>
        </ul>
    `,
    directives: [CORE_DIRECTIVES, heroRender]
})
export default class LittleTour {
    public hidden:boolean = true;

    constructor(public heroService:heroService) {
    }

    addHero(newHero) {
        this.hidden = false;

        if (newHero.value) {
            let hero = new Hero(1, newHero.value, "strong");
            this.heroService.addHero(hero);
            newHero.value = null;
        }
    }
}