import {Component, Input, CORE_DIRECTIVES} from "angular2/angular2";
import Hero from "./hero";

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
        <div [ng-class]="getHeroClass()" class="hero">
        {{ hero.name }} | {{ hero.power }}
        </div>
    `
})
export default class HeroRender {
    @Input()  hero:Hero;

    getHeroClass() {
        return this.hero.name === 'Julia' ? "hero-red" : "hero-green";
    }
}
