let element: Object | null;
let input: number | string;

//literal type
let monthName: 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun'
monthName = "mar"
//monthName = 'sep'


// type aliases only TS
type strORnum = string | number;
let data : strORnum
//let data1 : number | string

data = 100
data = "Hello"
//data = true

type NameOfMonth = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun';

let mm: NameOfMonth = 'mar';
// let mm1 : NameOfMonth = 'dec'


