import { PageSet } from '../../shared';

export class ResultSet {
  pageSet: PageSet;
  results: any[];
  
  constructor() { 
    this.results = [];
    this.pageSet = new PageSet();
  }

  update(results: any[], page: number, totalResults: number) {
    this.results = results;
    this.pageSet.update(results.length, page, totalResults);
  }
  
}
