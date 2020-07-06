class Test {
    constructor(public readonly id: number, public name: string) {}
}

let x = new Test(100, "Hi")
x.id = 900;
x.name = "Hello";