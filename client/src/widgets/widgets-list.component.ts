import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'widgets-list',
  template: `
    <div *ngFor="#widget of widgets" (click)="selected.emit(widget)"
      class="widget-card mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{widget.name}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{widget.cost}}
      </div>
      <div class="mdl-card__menu">
        <button (click)="deleted.emit(widget); $event.stopPropagation();"
          class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">close</i>
        </button>
      </div>
    </div>
  `
})
export class WidgetsList {
  @Input() widgets: any[];
  @Output() selected: EventEmitter<any> = new EventEmitter();
}
