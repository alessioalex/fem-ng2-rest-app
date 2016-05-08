import {Component, Input} from 'angular2/core';

@Component({
  selector: 'widget-details',
  template: `
    <h1>{{ selectedWidget.name }}</h1>

    <h4>{{ selectedWidget.cost }}</h4>
  `
})
export class WidgetDetails {
  @Input() selectedWidget;
}
