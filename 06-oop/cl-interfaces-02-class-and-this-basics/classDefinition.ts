// members
// property   = var
// method     = function() {}
class Computer {
    cpu: string
    ram: number
    keyboard: string
    screen: string
    disk: number
    constructor(cpu: string, ram: number, keyboard: string, screen: string, disk: number) {
        this.cpu = cpu;
        this.ram = ram;
        this.keyboard = keyboard;
        this.screen = screen;
        this.disk = disk;
    }
    details() {
        return `CPU: ${this.cpu} RAM: ${this.ram}`
    }
}
let c1 = new Computer("I7", 1024, "EN-SS1234", "V50", 1024)
//console.log(c1)
let s = c1.details();
console.log(s)





