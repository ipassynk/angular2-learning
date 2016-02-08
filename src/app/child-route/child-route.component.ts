import {Component,Type} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import ComponentDescriptionDecorator from "../decorator/conponent-description.decorator";

@Component({
    selector: 'nested-route-detail',
    template: "<h3>Child Detail view</h3> Details 1 <a [routerLink]=\"['/ChildRoute', 'ChildSummary']\">back to Summary</a>",
    directives: [ ROUTER_DIRECTIVES ]
})
export class ChildDetail {}

@Component({
    selector: 'nested-route-summary',
    template: "<h3>Child Summary view</h3> <a [routerLink]=\"['../ChildDetail', {id: 1}]\">Got to child details 1</a>",
    //template:'ChildSummary',
    directives: [ ROUTER_DIRECTIVES ]
})
export class ChildSummary {}

@ComponentDescriptionDecorator('Child/Parent nested routes')
@RouteConfig([
    {path: '/', component: ChildSummary, as: 'ChildSummary', useAsDefault: true},
    {path: '/:id', component: ChildDetail, as: 'ChildDetail'}
])
@Component({
    selector: 'nested-route',
    template: '<router-outlet></router-outlet>',
    directives: [ ROUTER_DIRECTIVES ]
})
export class ChildRoute {

}