import {Component, Input} from 'angular2/core';
import Hero from './../model/hero';

@Component({
    selector: 'hero-render',
    styles: [`
    .hero-red {
        background-color: red;
        text-decoration: line-through;
        text-line-through-color: black;
    }
    .hero-green {
        background-color: #42A948;
    }
    .hero {
        padding: 20px 0;
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
        return this.hero.name === 'Julia' ? 'hero-red' : 'hero-green';
    }
}
