import {Component, Input} from "angular2/angular2";
import Hero from "./hero";


@Component({
    selector: 'hero-render',
    template: `
        <div>
        {{ hero.name }} | {{ hero.power }}
        </div>
    `
})
export default class HeroRender {
    @Input()  hero : Hero;
}
