// function as parameter
function CalcTax(sum: number, rate: number, cb: (num: number) => void): number {
    let result: number = sum * rate / 100
    cb(result)
    return 0;
}

// I
CalcTax(1000, 20 , (n: number) => { console.log(n)})

// II
function calcIt(n: number) : void {
    console.log(n)
}

CalcTax(1000, 20, calcIt)
