/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>
import {Component,Type} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES}from 'angular2/router';

import Template from "./template/template";
import Form from "./form/form";
import List from "./list/list";
import ChildParent from "./child_parent/child-parent.component";
import TickObservable from "./tick-observable/ticker-list.component";
import PanelList from "./panel/panel-list.component";
import FormObservable from './form-observable/form-observable.component';
import ClickObservable from "./click-observable/click-observable.component";
import Event from "./event/event";
import PipeHost from "./pipe/pipe-host.component";
import WebSocket from "./websocket/websocket";
import ObservableList from "./list-observable/list";
import {ChildRoute,ChildSummary} from "./child-route/child-route.component";
import AsyncFilter from "./async-filter/async-filter.component";
import ButtonControl from "./button-control/button-control.component";
import TimeoutCmp from "./timeout/timeout.component";
import HttpRxjs from "./http-rxjs/http-rxjs.component";

@RouteConfig([
    {path: '/click-observable', component: ClickObservable, as: 'ClickObservable'},
    {path: '/form-observable', component: FormObservable, as: 'FormObservable'},
    {path: '/panel-list', component: PanelList, as: 'PanelList'},
    {path: '/tick-observable', component: TickObservable, as: 'TickObservable'},
    {path: '/template', component: Template, as: 'Template'},
    {path: '/form', component: Form, as: 'Form'},
    {path: '/list', component: List, as: 'List'},
    {path: '/observable-list', component: ObservableList, as: 'ObservableList'},
    {path: '/child-parent', component: ChildParent, as: 'ChildParent'},
    {path: '/event', component: Event, as: 'Event'},
    {path: '/pipe', component: PipeHost, as: 'PipeHost'},
    {path: '/websocket', component: WebSocket, as: 'WebSocket'},
    {path: '/child-route/...', component: ChildRoute, as: "ChildRoute"},
    {path: '/async-filter', component: AsyncFilter, as: "AsyncFilter"},
    {path: '/button-control', component: ButtonControl, as: "ButtonControl"},
    {path: '/timeout', component: TimeoutCmp, as: "TimeoutCmp"},
    {path: '/http-rxjs', component: HttpRxjs, as: "HttpRxjs"}
])
@Component({
    selector: 'app',
    templateUrl: 'src/app/app.html',
    directives: [ROUTER_DIRECTIVES, Template, Form, List, ChildParent, TickObservable,
        PanelList, FormObservable, ClickObservable, Event, PipeHost, WebSocket, ChildRoute, ButtonControl, HttpRxjs]
})
export default class App {
    getRoutes():Array<Object> {
        return Reflect.getMetadata('annotations', this.constructor)
            .filter(a => {
                return a.constructor.name === 'RouteConfig';
            }).pop().configs;
    }

    getDescription(cmp:Type) {
        return Reflect.getMetadata('ComponentDescriptionDecorator', cmp);
    }
}
