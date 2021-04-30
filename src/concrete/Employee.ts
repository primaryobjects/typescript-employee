import BaseEmployee from '../abstract/BaseEmployee';
import DepartmentType from '../enum/DepartmentType';

class Employee extends BaseEmployee {
    active: boolean;
  
    constructor(name: string, department: DepartmentType, active: boolean = true) {
      super(name, department);

      this.active = active;
    }
  
    toString(): string {
      return `${super.toString()}, ${this.active ? 'Active' : 'Terminated'}`;
    }
  
    hire(): void {
      this.active = true;
    }
  
    terminate(): void {
      this.active = false;
    }
}

export default Employee;