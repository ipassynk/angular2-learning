import {Component,Type} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
    selector: 'nested-route-detail',
    template: '',
    //template: "Details <a [routerLink]=\"['/NestedRoute', 'Summary']\">back to Summary</a>",
    directives: [ ROUTER_DIRECTIVES ]
})
class Detail {}

@Component({
    selector: 'nested-route-summary',
    //template: "<a [routerLink]=\"['../Detail', {id: 1}]\">1",
    template:'',
    directives: [ ROUTER_DIRECTIVES ]
})
class Summary {}

@RouteConfig([
    {path: '/summary', component: Summary, as: 'Summary'},
    {path: '/detail/:id', component: Detail, as: 'Detail'}
])
@Component({
    selector: 'nested-route',
    template: '<router-outlet></router-outlet>',
    directives: [ ROUTER_DIRECTIVES ]
})
export default class NestedRoute {

}