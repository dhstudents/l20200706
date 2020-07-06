class Person {
    constructor(protected id: number, public firstname: string, public lastname: string) { }
    details() {
        return `ID: ${this.id} Full Name: ${this.firstname + ' ' + this.lastname}`
    }
}

class Customer extends Person {
    constructor(id: number, firstname: string, lastname: string, public customerType: string) {
        super(id, firstname, lastname)
        // this.customerType = customerType
        
        
    }
    details() {
        let d = super.details() + ` TYPE: ${this.customerType}`
        return d;
    }
}

class Employee extends Person {
    constructor(public department: number , public salary: number , id: number , firstname: string , lastname: string) {
        super(id , firstname, lastname);
    }

    details() {
        let d = super.details() + ` DEPRTMENT: ${this.department}  SALARY: ${this.salary}`
        return d;
    }
}






let p = new Person(3, "aaa", "bbb")
let c = new Customer(60, "wwww", "qqqq", "gold");
let e = new Employee(100 , 1200 , 120 , "AAA" , "BBB");
let o = { id: 2 , note: 'alalalala'}
// console.log(p.details());
// console.log(c.details());
// console.log(e.details());

const all : Person[] = []

all.push(c)
all.push(e)

all.forEach( p => {
    if (p instanceof Customer) {
        console.log("Customer" , p.details())
    }
    if (p instanceof Employee) {
        console.log("Employee" , p.details())
    }

})


















