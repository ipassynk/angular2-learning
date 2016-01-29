import {Component,Attribute,provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';

import heroService from "./services/hero.service";
import ItemService from "./services/item.service";
import SearchService from './services/search.service';

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

import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

@RouteConfig([
    {path: '/page1', component: Page1, as: 'Page1'},
    {path: '/page2', component: Page2, as: 'Page2'},
    {path: '/page3', component: Page3, as: 'Page3'}
])
@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.html',
    directives: [ROUTER_DIRECTIVES, Page1, Page2, Page3]
})
class AppComponent {
    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }
}

bootstrap(AppComponent, [heroService, ItemService, SearchService, ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
