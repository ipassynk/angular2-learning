import {Component} from 'angular2/core';

import heroService from './../services/hero.service';
import Hero from './../model/hero';
import heroRender from './hero_render.component';

@Component({
  selector: 'little-tour',
  template: `
        <div [hidden]="hidden" class="alert alert-success">New hero is added!</div>
        <input #newHero (keyup.enter)="addHero(newHero)">
        <button class="btn btn-primary-outline" (click)="addHero(newHero)">Add Hero</button>
        <ul>
            <li *ngFor="#hero of heroService.heroes"><hero-render [hero]="hero"></hero-render></li>
        </ul>
    `,
  directives: [heroRender]
})
export default class LittleTour {
  public hidden:boolean = true;

  constructor(public heroService:heroService) {
  }

  addHero(newHero) {
    this.hidden = false;

    if (newHero.value) {
      let hero = new Hero(1, newHero.value, 'strong');
      this.heroService.addHero(hero);
      newHero.value = null;
    }
  }
}
