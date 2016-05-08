import {Component, OnInit} from 'angular2/core';
import {RouteParams, RouteConfig} from 'angular2/router';

// TODO: figure out why not rendered? ..?
@Component({
  selector: 'child',
  template: '<div>child</div>'
})
class ChildComponent implements OnInit {
  constructor() {
    console.log('constructor ChildComponent');
  }

  ngOnInit() {
    console.log('onInit ChildComponent');
  }
}

@Component({
  selector: 'demo',
  template: `
    <div class="demo">
      <h1>Demo here</h1>
      <router-outlet></router-outlet>
    </div>
  `
})
@RouteConfig([
  {path: '/child', name: 'Child', component: ChildComponent, useAsDefault: true}
])
export class Demo {
  constructor(private _params: RouteParams) {
    // alert(_params.get('id'));
  }
}
