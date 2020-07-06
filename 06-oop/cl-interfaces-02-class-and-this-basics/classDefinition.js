// members
// property   = var
// method     = function() {}
var Computer = /** @class */ (function () {
    function Computer(cpu, ram, keyboard, screen, disk) {
        this.cpu = cpu;
        this.ram = ram;
        this.keyboard = keyboard;
        this.screen = screen;
        this.disk = disk;
    }
    Computer.prototype.details = function () {
        return "CPU: " + this.cpu + " RAM: " + this.ram;
    };
    return Computer;
}());
var c1 = new Computer("I7", 1024, "EN-SS1234", "V50", 1024);
//console.log(c1)
var s = c1.details();
console.log(s);
