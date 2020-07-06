class Member {
    //    private id: number;
    //    public name: string;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //        this.id = id
        //        this.name = name
    }
    details() {
        return "";
    }
    get Id() {
        return this.id;
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        if (value === "") {
            throw new Error('Danny Name can not be empty');
        }
        this.name = value;
    }
}
let m = new Member(1, 'Danny');
m.Name = "Dudi";
m.Name = "";
