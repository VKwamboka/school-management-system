import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  data:{name:string, course:string, fee:string, balance:string}[]=[]

  transform(items: any[]): any[] {
    if (!items) return [];
    for (let student in items) {
      // let bal = student.b
      if () {
        
        
      }
    }
    let balance = items.filter((student) => (student.balance !=0));
    let nobalance = items.filter((student) => (student.balance === "0"));
    return balance 
    return nobalance
  }

}
