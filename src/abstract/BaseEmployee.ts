import IEmployee from '../interface/IEmployee';
import DepartmentType from '../enum/DepartmentType';
import IdGenerator from '../utility/IdGenerator';

abstract class BaseEmployee implements IEmployee {
    id: number;
    name: string;
    department: DepartmentType;
      
    constructor(_name: string, _department: DepartmentType) {
        this.id = IdGenerator.next();
        this.name = _name;
        this.department = _department;
    }
      
    toString(): string {
        return `${this.name} (${this.id}) - ${DepartmentType[this.department]}`;
    }
}

export default BaseEmployee;