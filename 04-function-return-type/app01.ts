// function as parameter
function CalcTax(sum: number, rate: number, cb: (num: number) => void): number {
    cb(10000)
    return 0;
}

// I
CalcTax(1000, 20 , (n: number) => { console.log(n)})

// II
function calcIt(n: number) {
    console.log(n)
}

CalcTax(1000, 20, calcIt)
