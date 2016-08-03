export const PAGE_SIZE = 10;

export class PageSet {
  page: number;
	size: number;
	totalPages: number;
	from: number;
	to: number;
  
  constructor() { 
    this.page = 1;
    this.size = 0;
    this.totalPages = 1;
    this.from = 1;
    this.to = 0;
  }

  update(results: number, page: number, totalResults: number) {
    this.page = page;
    this.size = totalResults;
    this.totalPages = Math.floor(this.size / PAGE_SIZE) + 1;
    this.from = ((this.page - 1) * PAGE_SIZE) + 1;
    this.to = this.from + (results - 1);
  }
  
}
