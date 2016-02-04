import {Component,provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy,Router}from 'angular2/router';

import heroService from "./services/hero.service";
import AppComponent from "./app";

bootstrap(AppComponent, [heroService, ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
