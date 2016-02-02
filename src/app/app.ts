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

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";

@RouteConfig([
    {path: '/page1', component: Page1, name: 'Page1'},
    {path: '/page2', component: Page2, name: 'Page2', useAsDefault: true},
    {path: '/page3', component: Page3, name: 'Page3'},
    {path: '/page4', component: Page4, name: 'Page4'}
])
@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.html',
    directives: [ROUTER_DIRECTIVES, Page1, Page2, Page3, Page4]
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
