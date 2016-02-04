import {Component} from "angular2/core";
import Hero from "./../model/hero";
import heroService from "./../services/hero.service";

@Component({
    selector: 'hero-form',
    templateUrl: 'src/app/form/hero-form.html'
})
export default class HeroFormComponent {
    public powers:string[] = ['Smart', 'Flexible', 'Hot', 'Strong'];
    public model:Hero = new Hero(18, 'Julia', this.powers[1], 'Meee');
    public submitted:Boolean = false;

    constructor(public heroService:heroService) {}

    onSubmit() {
        this.submitted = true;
        this.heroService.addHero(new Hero(1, this.model.name, this.powers[1]));
    }
}