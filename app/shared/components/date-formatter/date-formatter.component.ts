import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { HelperService } from '../../../shared';

@Component({
  selector: 'ao-date-formatter',
  template: '<span>{{ outDate }}</span>'
})
export class DateFormatterComponent implements OnChanges {
  @Input() date: number; // Date.getTime() ms representing the date
  @Input() pattern: string;
  outDate: string;

  constructor(private helperService: HelperService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['date']) {
      this.date = changes['date'].currentValue;
    }
    if (changes['pattern']) {
      this.pattern = changes['pattern'].currentValue;
    }
    this.outDate = this.helperService.dateToString(new Date(this.date), this.pattern);
  } 

}