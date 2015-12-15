import heroService from "./heroService";

import {
    Component,
    Attribute,
    bootstrap,
    provide
} from 'angular2/angular2';

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
}
    from 'angular2/router';

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

@RouteConfig([
    {path: '/page1', component: Page1, as: 'Page1'},
    {path: '/page2', component: Page2, as: 'Page2'},
    {path: '/page3', component: Page3, as: 'Page3'}
])
@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.html',
    directives: [ROUTER_DIRECTIVES, Page1, Page2]
})
class AppComponent {
    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }
}

bootstrap(AppComponent, [heroService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
