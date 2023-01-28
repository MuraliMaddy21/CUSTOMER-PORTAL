import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any, filterString:any){
    

    if(value.length===0 || filterString==='')
    {
      return value;
    }

    const items=[];
    filterString=filterString.toUpperCase();

    for(const entries of value)
    {
      if(entries['DOC_STATUS'].toUpperCase().includes(filterString))
      {
        items.push(entries);
      }
    }
    return items;
  }

}
