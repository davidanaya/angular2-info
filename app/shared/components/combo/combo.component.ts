import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { NGB_DROPDOWN_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ao-combo',
  templateUrl: 'app/shared/components/combo/combo.component.html',
  directives: [ NGB_DROPDOWN_DIRECTIVES ]
})
export class ComboComponent implements OnInit, OnChanges {
  @Input() options: any[];
  @Input() type: string = 'data';
  @Input() disabled: boolean = false;
  @Output() update = new EventEmitter();
  selectedId: any; // id of the selected option
  selectedName: string = 'All'; // display label of the selected option
  addItemAll = false; // if true, adds option 'All' to the array options
  dropLayout: string; // css style to be applied to dropdown based on number of items in options
  isTypeSports = false; // type of dropdown, used to display images for every item

  // lifecycle hooks
  ngOnInit() {
    this.isTypeSports = this.type ? this.type === 'sports' : false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.selectedName = 'All';
      this.selectedId = undefined;
    }
    this.dropLayout = this.getBlocksClass();
  } 

  // methods
  private getBlocksClass() : string {			
		// update class depending on number of elements	
		if (this.options) {
			let allOption = this.addItemAll? 1 : 0;
				
			let blocks = (this.options.length + allOption) / 6;
			let mod = (this.options.length + allOption) % 6;
			
			if (blocks < 1 || (blocks === 1 && mod === 0)) return 'dropdown-list-6';
			else if (blocks < 2 || (blocks === 2 && mod === 0)) return 'dropdown-list-12';
			else if (blocks < 3 || (blocks === 3 && mod === 0)) return 'dropdown-list-18';
			else return 'dropdown-list-more';
		}
	}

  isSelection() : boolean {
    return this.selectedId ? true : false;
  }

  select(item) {
    this.selectedId = item ? item['id'] : undefined;
    this.selectedName = item ? item['name'] : 'All';
    this.update.emit({
      selected: item ? item['id'] : ''
    });
  }
}