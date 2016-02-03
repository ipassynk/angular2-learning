import {Component,Attribute,provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';

import heroService from "./services/hero.service";

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

import Page1 from "./page1_components/page1";
import Page2 from "./page2_components/page2";
import Page3 from "./page3_components/page3";
import Page4 from "./child_parent/page4";
import TickerList from "./tick/ticker-list.component";
import Host from "./content_components/host.component";
import FormObservable from './form-observable/form-observable.component';
import ClickObservable from "./click-observable/click-observable.component";

@RouteConfig([
    {path: '/click-observable', component: ClickObservable, name: 'ClickObservable'},
    {path: '/form-observable', component: FormObservable, name: 'FormObservable'},
    {path: '/host', component: Host, name: 'Host'},
    {path: '/tick', component: TickerList, name: 'TickerList'},
    {path: '/page1', component: Page1, name: 'Page1'},
    {path: '/page2', component: Page2, name: 'Page2', useAsDefault: true},
    {path: '/page3', component: Page3, name: 'Page3'},
    {path: '/page4', component: Page4, name: 'Page4'}
])
@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.html',
    directives: [ROUTER_DIRECTIVES, Page1, Page2, Page3, Page4, TickerList, Host, FormObservable, ClickObservable]
})
class AppComponent {
    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }
}

bootstrap(AppComponent, [heroService, ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
