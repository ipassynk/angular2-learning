/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>
import {Component,Attribute,provide,Type} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {
    RouteConfig,
    RouterLink,
    RouterOutlet,
    Route,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    Router
}from 'angular2/router';

import heroService from "./services/hero.service";
import Page1 from "./page1_components/page1";
import Page2 from "./page2_components/page2";
import Page3 from "./page3_components/page3";
import ChildParent from "./child_parent/child-parent.component";
import TickerList from "./tick/ticker-list.component";
import Host from "./content/host.component";
import FormObservable from './form-observable/form-observable.component';
import ClickObservable from "./click-observable/click-observable.component";

@RouteConfig([
    {path: '/click-observable', component: ClickObservable,  as: 'ClickObservable'},
    {path: '/form-observable', component: FormObservable,as: 'FormObservable'},
    {path: '/host', component: Host, as: 'Host'},
    {path: '/tick', component: TickerList, as: 'TickerList'},
    {path: '/page1', component: Page1, as: 'Page1'},
    {path: '/page2', component: Page2, as: 'Page2', useAsDefault: true},
    {path: '/page3', component: Page3, as: 'Page3'},
    {path: '/child-parent', component: ChildParent, as: 'ChildParent'}
])
@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.html',
    directives: [ROUTER_DIRECTIVES, Page1, Page2, Page3, ChildParent, TickerList, Host, FormObservable, ClickObservable]
})
class AppComponent {
    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getRoutes(): Array<Object> {
        return Reflect.getMetadata('annotations', this.constructor)
            .filter(a => {
                return a.constructor.name === 'RouteConfig';
            }).pop().configs;
    }

    getDescription(cmp:Type) {
        return Reflect.getMetadata('ComponentDescriptionDecorator', cmp);
    }
}

bootstrap(AppComponent, [heroService, ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
