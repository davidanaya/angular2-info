import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  
  transform(array: any[], sortFields: string[], reverse: boolean): any[] {
    array.sort((a: any[], b: any[]) => {
      let comparison = 0; // to force while
      let bothAreEqual = true;
      let iField = 0;
      while (bothAreEqual && (iField < sortFields.length)) {
        //console.log(`compare for ${ a[sortFields[iField]] } and ${ b[sortFields[iField]] } with reverse ${ reverse }`);
        comparison = this.compare(a, b, sortFields[iField], reverse);
        iField++;
        bothAreEqual = (comparison === 0);
      }
      //console.log(`comparison is ${ comparison }`);
      return comparison;
    });
    return array;
  }

  compare(a: any[], b: any[], sortField: string, reverse: boolean) : number {
    if (a[sortField] < b[sortField]) {
      return reverse ? 1 : -1;
    } else if (a[sortField] > b[sortField]) {
      return reverse ? -1 : 1;
    }
    return 0;    
  }
}