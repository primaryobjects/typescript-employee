import BaseEmployee from '../abstract/BaseEmployee';
import DepartmentType from '../enum/DepartmentType';

class Academic extends BaseEmployee {
    field: string;
  
    constructor(name: string, department: DepartmentType, field: string) {
      super(name, department);

      this.field = field;
    }
  
    toString(): string {
      return `${super.toString()}, ${this.field}`;
    }
}

export default Academic;