import DepartmentType from '../enum/DepartmentType';

interface IEmployee {
    id: number;
    name: string;
    department: DepartmentType;

    toString(): string;
}

export default IEmployee;