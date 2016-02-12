import {Component} from 'angular2/core';
import Hero from './../model/hero';
import HeroService from './../services/hero.service';

@Component({
  selector: 'hero-form',
  template: require('./hero-form.html')
})
export default class HeroFormComponent {
  public powers:string[] = ['Smart', 'Flexible', 'Hot', 'Strong'];
  public model:Hero = new Hero(18, 'Julia', this.powers[1], 'Meee');
  public submitted:boolean = false;

  constructor(public heroService:HeroService) {
  }

  onSubmit() {
    this.submitted = true;
    this.heroService.addHero(new Hero(1, this.model.name, this.powers[1]));
  }
}
