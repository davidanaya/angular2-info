import { OnInit, OnDestroy } from '@angular/core';

import { CommonCodesService, PageSet } from '../../shared';

export abstract class ScreenComponentBase implements OnInit, OnDestroy {  
  protected pageSet: PageSet;
  protected isDataReady: boolean = false;

  // sorting and filtering
  protected order: string; 
	protected reverse: boolean = false;	

  constructor(protected commonCodesService: CommonCodesService) { 
    this.pageSet = new PageSet();
  }

  // lifecycle hooks
  ngOnInit() {
  }

  ngOnDestroy() {
  }

  abstract onResultsOrderChanged();

	abstract onResultsPageUpdated();

  onUpdatePage(event) {
    this.pageSet.page = event.page;
    this.onResultsPageUpdated();
  };

  getCommonCodeValue(commonCodeCategory: string, code: string) {
    return this.commonCodesService.getValue(commonCodeCategory, code);
  }

  isUpSort(p) { 
    return this.order === p && !this.reverse; 
  }
	
  isDownSort(p) {
    return this.order === p && this.reverse; 
  }

  setOrder(order) {
    this.reverse = order === this.order ? !this.reverse : false;
    this.order = order;
    this.onResultsOrderChanged();
  }

}