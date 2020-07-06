var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, firstname, lastname) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.details = function () {
        return "ID: " + this.id + " Full Name: " + (this.firstname + ' ' + this.lastname);
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, firstname, lastname, customerType) {
        var _this = _super.call(this, id, firstname, lastname) || this;
        _this.customerType = customerType;
        return _this;
        // this.customerType = customerType
    }
    Customer.prototype.details = function () {
        var d = _super.prototype.details.call(this) + (" TYPE: " + this.customerType);
        return d;
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(department, salary, id, firstname, lastname) {
        var _this = _super.call(this, id, firstname, lastname) || this;
        _this.department = department;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.details = function () {
        var d = _super.prototype.details.call(this) + (" DEPRTMENT: " + this.department + "  SALARY: " + this.salary);
        return d;
    };
    return Employee;
}(Person));
var p = new Person(3, "aaa", "bbb");
var c = new Customer(60, "wwww", "qqqq", "gold");
var e = new Employee(100, 1200, 120, "AAA", "BBB");
var o = { id: 2, note: 'alalalala' };
// console.log(p.details());
// console.log(c.details());
// console.log(e.details());
var all = [];
all.push(c);
all.push(e);
all.forEach(function (p) { return console.log(typeof p); });
