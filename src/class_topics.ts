class Employee {
        name : string;
        age:number;
        department:string;

        constructor(name: string, age:number, department:string) {
                this.name = name;
                this.age  = age;
                this.department = department

        }
        employeeDetails(){
                console.log(`Employee name is ${this.name} he's age ${this.age} from ${this.department} department`)
        }
}

const employee = new Employee('Varun', 25, 'Accounts')
employee.employeeDetails()

const anotheremployee = new Employee('sid', 25, 'IT')
anotheremployee.employeeDetails()