/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>
import {Component, Type} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES}from 'angular2/router';

import Template from './template/template';
import Form from './form/form';
import List from './list/list';
import ChildParent from './child_parent/child-parent.component';
import TickObservable from './tick-observable/ticker-list.component';
import PanelList from './panel/panel-list.component';
import FormObservable from './form-observable/form-observable.component';
import ClickObservable from './click-observable/click-observable.component';
import Event from './event/event';
import PipeHost from './pipe/pipe-host.component';
import WebSocket from './websocket/websocket';
import ObservableList from './list-observable/list';
import {ChildRoute, ChildSummary} from './child-route/child-route.component';
import AsyncFilter from './async-filter/async-filter.component';
import ButtonControl from './button-control/button-control.component';
import TimeoutCmp from './timeout/timeout.component';
import HttpRxjs from './http-rxjs/http-rxjs.component';
import ImmutableRoute from './immutable/immutable-route.componet';
import DragRx from './drag-rx/drag-rx.component';

@RouteConfig([
    {path: '/click-observable', component: ClickObservable, as: 'Click Observable'},
    {path: '/form-observable', component: FormObservable, as: 'Form Observable'},
    {path: '/panel-list', component: PanelList, as: 'Panel List'},
    {path: '/tick-observable', component: TickObservable, as: 'Tick Observable'},
    {path: '/template', component: Template, as: 'Template'},
    {path: '/form', component: Form, as: 'Form'},
    {path: '/list', component: List, as: 'List'},
    {path: '/observable-list', component: ObservableList, as: 'Observable List'},
    {path: '/child-parent', component: ChildParent, as: 'Child Parent'},
    {path: '/event', component: Event, as: 'Event'},
    {path: '/pipe', component: PipeHost, as: 'Pipe'},
    {path: '/websocket', component: WebSocket, as: 'WebSocket'},
    {path: '/child-route/...', component: ChildRoute, as: 'Child Route'},
    {path: '/async-filter', component: AsyncFilter, as: 'Async Filter'},
    {path: '/button-control', component: ButtonControl, as: 'Button Control'},
    {path: '/timeout', component: TimeoutCmp, as: 'Timeout Cmp'},
    {path: '/http-rxjs', component: HttpRxjs, as: 'Http Rxjs'},
    {path: '/immutable-route', component: ImmutableRoute, as: 'Immutable'},
    {path: '/drug-rx', component: DragRx, as: 'Drag Rx'}
])
@Component({
    selector: 'app',
    styles: [`
      footer {
        text-align: center;
        padding: 30px 0;
        margin-top: 70px;
        border-top: 1px solid #e5e5e5;
        background-color: #f5f5f5;
      }
      input.ng-valid, select.ng-valid {
        border-left: 5px solid #42A948; /* green */
      }
      input.ng-invalid {
        border-left: 5px solid #a94442; /* red */
      }
      .jumbotron {
        background-color: #e3f2fd;
      }
    `],
    template: require('./app.html'),
    directives: [ROUTER_DIRECTIVES, Template, Form, List, ChildParent, TickObservable,
        PanelList, FormObservable, ClickObservable, Event, PipeHost, WebSocket,
        ChildRoute, ButtonControl, HttpRxjs, ImmutableRoute, DragRx]
})
export class App {
    getRoutes(): Array<Object> {
        return Reflect.getMetadata('annotations', this.constructor)
            .filter(a => {
                return a.constructor.name === 'RouteConfig';
            }).pop().configs;
    }

    getDescription(cmp: Type) {
        return Reflect.getMetadata('ComponentDescriptionDecorator', cmp);
    }
}
