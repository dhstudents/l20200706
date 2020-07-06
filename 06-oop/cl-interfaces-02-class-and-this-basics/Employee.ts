class Employee {
    id: number
    name: string
    department: number
    hiredate: Date

    constructor(
        id: number,
        name: string,
        department: number,
        hiredate: Date
    ) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.hiredate = hiredate;
    }

    toHTML() {
        return `<tr>
                    <td>${this.id}</td>
                    <td>${this.name}</td>
                    <td>${this.department}</td>
                    <td>${this.hiredate.toISOString()}</td>
                </tr>`
    }
}

let e1 = new Employee(10 , 'popeye' , 20 , new Date())
let e2 = new Employee(20 , 'aba popeye' , 10 , new Date())
let e3 = new Employee(30 , 'sabba popeye' , 10 , new Date())

const employees : Employee[] = []
employees.push(e1)
employees.push(e2)
employees.push(e3)

for (let emp of employees) {
    console.log(emp.toHTML());
}














