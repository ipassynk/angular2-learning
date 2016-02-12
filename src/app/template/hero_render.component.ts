import {Component, Input} from 'angular2/core';
import Hero from './../model/hero';

@Component({
    selector: 'hero-render',
    styles: [`
    .hero-red {
        background-color: #a94442;
        text-decoration: line-through;
        text-line-through-color: black;
    }
    .hero-yellow {
        background-color: #fcf8e3;
    }
    .hero {
        padding: 20px;
        margin: 5px;
        border-radius: 5px;
    }
    `],
    template: `
        <div [ngClass]="getHeroClass()" class="hero">
            {{ hero.name }} | {{ hero.power }}
        </div>
    `
})
export default class HeroRender {
    @Input()  hero: Hero;

    getHeroClass() {
        return this.hero.name === 'Julia' ? 'hero-red' : 'hero-yellow';
    }
}
