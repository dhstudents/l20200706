class Test {
    // data: string
    constructor(private data: string[]) {
        // this.data = data
    }

    addData(data: string) {
        this.data.push(data);
    }

    public get Data() {
        return this.data[0]
    }
    public set Data(value : string) {
        this.data[0] = value;
    }

}


let t = new Test(["Hello"]);
t.Data = "Hi"
let d = t.Data
// let d = t.getData()
// t.setData("Hi")




