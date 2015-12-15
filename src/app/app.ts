import heroService from "./heroService";

import {
    Component,
    Attribute,
    bootstrap
} from 'angular2/angular2';

import LittleTour from './littleHero';
import HeroFormComponent from "./hero-form";
import ControlFormComponent from "./control-form";
import Highlight from "./Highlight";

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.html',
    directives: [LittleTour, HeroFormComponent, ControlFormComponent, Highlight],
})
class AppComponent {
}

bootstrap(AppComponent, [heroService]);
