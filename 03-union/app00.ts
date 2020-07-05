let element: Object | null;

let input: number | string;

//literal type
let monthName: 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun'
monthName = 'feb'
//monthName = 'sep'


// type aliases only TS
type strORnum = string | number;
let data : strORnum

data = 100
data = "Hello"
// data = true

type NameOfMonth = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun';

let mm: NameOfMonth = 'mar';
// let mm1 : NameOfMonth = 'dec'


