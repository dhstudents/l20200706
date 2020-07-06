//export {}
//type NameOfMonth = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun';
function ShowResult(): void {
    console.log("Result!!!!!")
}

// functions as types
function Add(n1: number, n2: number): number {
    return n1 + n2;
}
function Mul(n1: number, n2: number): number {
    return n1 * n2;
}
var f 
f = Add;
//f = 10

var ff: Function
//ff = Add; // no params declaration
//ff = 10



let fff: AddCalc 
fff = Add;

function SayName(name) { return "Hello " + name }


//fff = SayName;

type CalcFuncType = (a: number, b: number) => number

//function generalCalc(cb:(a: number, b: number) => number ) {
function generalCalc(cb: CalcFuncType ) {
    console.log(cb(2,3));
}

generalCalc(Add)
generalCalc(Mul)
generalCalc(SayName)





