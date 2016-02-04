/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>
import {Component,Type} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES}from 'angular2/router';

import Template from "./template/template";
import Form from "./form/form";
import Page3 from "./page3_components/page3";
import ChildParent from "./child_parent/child-parent.component";
import TickObservable from "./tick-observable/ticker-list.component";
import PanelHost from "./content/panel-host.component";
import FormObservable from './form-observable/form-observable.component';
import ClickObservable from "./click-observable/click-observable.component";
import Event from "./event/event";

@RouteConfig([
    {path: '/click-observable', component: ClickObservable,  as: 'ClickObservable'},
    {path: '/form-observable', component: FormObservable,as: 'FormObservable'},
    {path: '/panel-host', component: PanelHost, as: 'PanelHost'},
    {path: '/tick-observable', component: TickObservable, as: 'TickObservable'},
    {path: '/template', component: Template, as: 'Template'},
    {path: '/form', component: Form, as: 'Form'},
    {path: '/page3', component: Page3, as: 'Page3'},
    {path: '/child-parent', component: ChildParent, as: 'ChildParent'},
    {path: '/event', component: Event, as: 'Event'}
])
@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.html',
    directives: [ROUTER_DIRECTIVES, Template, Form, Page3,
        ChildParent, TickObservable, PanelHost, FormObservable, ClickObservable, Event]
})
export default class AppComponent {
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
