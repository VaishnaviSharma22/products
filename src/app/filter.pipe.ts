import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any[], filterString: string, propName:string): any[] {
  const resultArray=[];
  if(employees.length === 0 || filterString === '' || propName === ''){
    return employees;
  }
  for(const employee of employees){
    if(employee[propName] === filterString){
      resultArray.push(employee);
    }
  }
    return resultArray;
  }

}
