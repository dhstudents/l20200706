class Member {
//    private id: number;
//    public name: string;

    constructor(private id: number ,private name: string) {
//        this.id = id
//        this.name = name
    }

    public details(): string {
        return "";
    }

    public get Id() : number {
        return this.id
    }

    public get Name() : string {
        return this.name
    }
    public set Name(value : string) {
        if (value === "") {
            throw new Error('Danny Name can not be empty');
        }

        this.name = value
    }
}

let m = new Member( 1, 'Danny');

m.Name = "Dudi"
m.Name









