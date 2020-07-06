var Employee = /** @class */ (function () {
    function Employee(id, name, department, hiredate) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.hiredate = hiredate;
    }
    Employee.prototype.toHTML = function () {
        return "<tr>\n                    <td>" + this.id + "</td>\n                    <td>" + this.name + "</td>\n                    <td>" + this.department + "</td>\n                    <td>" + this.hiredate.toISOString() + "</td>\n                </tr>";
    };
    return Employee;
}());
var e1 = new Employee(10, 'popeye', 20, new Date());
var e2 = new Employee(20, 'aba popeye', 10, new Date());
var e3 = new Employee(30, 'sabba popeye', 10, new Date());
var employees = [];
employees.push(e1);
employees.push(e2);
employees.push(e3);
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var emp = employees_1[_i];
    console.log(emp.toHTML());
}
