import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, filterString:any){
    

    if(value.length===0 || filterString==='')
    {
      return value;
    }
    
    filterString=filterString.toUpperCase();
    const items=[];

    for(const entries of value)
    {
      if(entries['AUTLF'].toUpperCase().includes(filterString))
      {
        items.push(entries);
      }
    }
    return items;
  }

}
