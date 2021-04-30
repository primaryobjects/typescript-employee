import DepartmentType from './enum/DepartmentType';
import IEmployee from './interface/IEmployee';
import Employee from './concrete/Employee';
import Academic from './concrete/Academic';

/*const sally: Employee = new Employee('Sally Doe', DepartmentType.HR);
console.log(sally.toString());

const jane: Employee = new Employee('Jane Doe', DepartmentType.Data);
console.log(jane.toString());*/

const company: IEmployee[] = [
  new Employee('Sally Doe', DepartmentType.HR),
  new Employee('Jane Doe', DepartmentType.Data),
  new Academic('Foster Brown', DepartmentType.Data, 'Physics')
]

const ee: Employee = company[1] as Employee;
ee.terminate();

for (let e of company) {
  console.log(e.toString());
}