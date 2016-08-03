import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PageSet } from '../../../shared';

@Component({
  selector: 'ao-pagination',
  templateUrl: 'app/shared/components/pagination/pagination.component.html'
})
export class PaginationComponent {

  @Input() pageSet: PageSet;
  @Output() update = new EventEmitter()

  prevPage() { 
    this.pageSet.page--;
    this.update.emit({
      page: this.pageSet.page 
    });
  }

  nextPage() { 
    this.pageSet.page++; 
    this.update.emit({
      page: this.pageSet.page 
    });
  }

  isLastPage() : boolean { 
    return this.pageSet.page === this.pageSet.totalPages;
  }
	
  isFirstPage() : boolean { 
    return this.pageSet.page === 1; 
  }

  getResultsInfo() : string {
    switch (this.pageSet.size) {
      case 0: return '';
			case 1: return 'Item 1 of 1';
			default:			 					
			  return this.pageSet.totalPages === 1 ? `Items ${ this.pageSet.from } to ${ this.pageSet.to }` : 
						`Items ${ this.pageSet.from } to ${ this.pageSet.to } from ${ this.pageSet.size }`;
		}
  }

  getPaginationInfo() : string {
    switch (this.pageSet.totalPages) {
			case 0:
			case 1: return '';
			default: return `Page ${ this.pageSet.page } of ${ this.pageSet.totalPages }`;
		}
  }

}