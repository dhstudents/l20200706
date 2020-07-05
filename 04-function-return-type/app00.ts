


function ShowResult() : void {
    console.log("Result!!!!!")
}


// functions as types

function Add(n1: number, n2: number): number {
    return n1 + n2;
}
let f 
f = Add;
// f = 10

let ff: Function
ff = Add; // no params declaration
// ff = 10

let fff: (a: number, b: number) => number
fff = Add;
// fff = function(name) { return "Hello " + name }



