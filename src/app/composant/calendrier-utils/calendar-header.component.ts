import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'mwl-demo-utils-calendar-header',
  templateUrl: `calendar-header.html`
})
export class CalendarHeaderComponent {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale = 'fr';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
}