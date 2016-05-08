import {Component} from 'angular2/core';
import {WidgetsService} from './widgets.service';
import {RouteParams} from 'angular2/router';
import {WidgetsList} from './widgets-list.component';
import {WidgetDetails} from './widget-details.component';

@Component({
  selector: 'widgets',
  template: `
    <div class="mdl-grid items">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets" (selected)="selectWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-details [selectedWidget]="selectedWidget"></widget-details>
      </div>
    </div>
  `,
  directives: [WidgetsList, WidgetDetails],
  providers: [WidgetsService]
})
export class Widgets {
  widgets = [];
  selectedWidget = {};

  constructor(_widgetsService: WidgetsService, private _params: RouteParams) {
    this.widgets = _widgetsService.widgets;

    // this.selectedWidget = this.widgets.find(
    //   w => w.id === parseInt(_params.get('id'), 10)
    // );
  }

  selectWidget(widget) {
    console.log('selectWidget', arguments);
    this.selectedWidget = widget;
  }
}
