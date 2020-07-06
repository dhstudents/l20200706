interface IUtilities {
    counter: number
    toHTML : () => string 
    details: () => string
}

class Test implements IUtilities {
    counter: number;
    constructor(private id: number , public name: string , counter: number) {
        this.counter = counter;
    }

    details(): string {
        throw new Error('not implemented')
    };
    
    toHTML(): string {
        return "OK"
    };
}


class Car implements IUtilities {
    counter: number = 10;
    details(): string {
        throw new Error('not implemented')
    }
    toHTML(): string {
        return "CAR"
    };
    
}