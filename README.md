typescript-employee
===================

A quick example of creating a TypeScript application!

## About

This example uses TypeScript to create a simple Employee set of classes, including an interface, abstract base class, static utility method, and an array of interfaces (using the Strategy Design Pattern).

## Quick Start

```bash
npm install
npm start
```

## Layout

```
src/
    abstract/BaseEmployee.ts
    
    concrete/Academic.ts
    concrete/Employee.ts

    enum/DepartmentType.ts

    interface/IEmployee.ts

    utility/IdGenerator.ts
    
    app.ts
```

## Output

```text
Sally Doe (1) - HR, Active
Jane Doe (2) - Data, Terminated
Foster Brown (3) - Data, Physics
```
