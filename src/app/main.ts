import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy}from 'angular2/router';

import heroService from "./services/hero.service";
import App from "./app";

//enableProdMode();
bootstrap(App,
    [heroService,
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})]);
