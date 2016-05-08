import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Items} from './items/items.component';
import {Demo} from './demo';
import {Widgets} from './widgets/widgets.component';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/items', name: 'Items', component: Items, useAsDefault: true},
  {path: '/demo/...', name: 'Demo', component: Demo},
  {path: '/widgets/:id', name: 'Widgets', component: Widgets}
  // {path: '/demo/:id', name: 'Demo', component: Demo}
])
export class App {
  links = {
    items: ['Items'],
    demo: ['Demo'],
    widgets: ['Widgets', { id: '4' }]
  }

  constructor(private _router: Router) {}

  goToDemo() {
    // this._router.navigate(['./Demo', {id: 30}]);
    this._router.navigate(this.links.demo);
  }
}
