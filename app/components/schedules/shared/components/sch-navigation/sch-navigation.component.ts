import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ComboComponent, CommonCodesService } from '../../../../../shared';

@Component({
  selector: 'ao-sch-navigation',
  templateUrl: 'app/components/schedules/shared/components/sch-navigation/sch-navigation.component.html',
  directives: [ ComboComponent, ROUTER_DIRECTIVES ]
})
export class SchNavigationComponent implements OnInit {
  @Input() selected : string; // selected state in the component
  @Output() update = new EventEmitter();
  sport: string = '';
  event: string = '';
  sportsList: any[];
  eventsInSport: any[];

  constructor(private commonCodesService: CommonCodesService) {}

  // lifecycle hooks
  ngOnInit() {
    this.sportsList = this.commonCodesService.getSportList();
  }

  // on events
  private onSelect(updateEvents) {
    this.update.emit({
      sport: this.sport,
      event: this.event
    });
    if (updateEvents) {
      this.eventsInSport = this.commonCodesService.getEventsList(this.sport);
    }
  }

  isSelected(state: string) : boolean {
    return state === this.selected;
  }

  onSelectSport(event) {
    this.sport = event.selected;
    this.event = '';
    this.eventsInSport = [];
    this.onSelect(true);
  }

  onSelectEvent(event) {
    this.event = event.selected;
    this.onSelect(false);
  }

  // methods
  isSportSelected() : boolean {
    return this.sport ? this.sport !== '' : false;
  }

}