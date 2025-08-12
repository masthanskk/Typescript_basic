

// Regular Function

function addNumber (a:number, b: number){
       return a + b
}
// addNumber(4,4)
console.log(addNumber(4,4))

// Function Expression
const minus = function(a:number, b:number){
       return a - b
}
console.log(minus(10,5))

// Arrow Function
const multiply = (a:number, b:number):number=> {
       return a*b
}
console.log(multiply(5, 7))

// Optional
function greet( username: string, greeting?:string) :string {
     //  return greeting + " " + username
     //  return `${greeting ? greeting : '' } ${username}` // ternary operator
     return greeting ? `${greeting} ${username}` : `${username}`
}
console.log(greet('masthan'))
// const username = 'Masthan' const greeting = 'shaik'
greet('Masthan', 'Shaik')


// function Overloading

function getdata(value: string): number;
function getdata(value: any[]): number;
function getdata(value: any): number {
  return value.length;
}

console.log(getdata('masthan'))           // output 7
console.log(getdata([1,2,3,4,'str']))     // output 5
console.log(getdata([1,4,1,3,5,2,5]))     // output 7


//  default parameters

function greet1(username: string, greeting?: string) :string{
       if(!greeting){
              return ''
       }
       return `${greeting} ${username}`
}
console.log(greet1('masthan', 'hey') ) 


// Rest Parameters

       function Sum(...numbers: number[]):number{
              return numbers.reduce((total,num)=> total +num, 0);
       }
        console.log(Sum(2,4,5,1,6,8,3,4));       // Output 33
        

         






let a = 99;
let b = 'ravi'

function user() {
       return a + b
}
          console.log(user()) // 99ravi
// function Expression

// type using in Function
type Cal1 = (x : number, y : number)  => number;
let adding: Cal1 = (x,y) => x+y;
console.log(adding(10,5))

type Tree ={
       value : string;
       children: Tree[]
}

let tree : Tree ={
       value: 'parent',
       children: [{
              value: 'fisrt child',
              children: [{
                     value: 'second child',
                     children: [{}]
              }]
       }]
}

console.log(tree)


const addingNumbers = function (d: number, c: number): number {
       return d + c
}
addingNumbers(54, 46) // 100


// Optional Parameters ?

const product = (title: string, price: number, discount?: boolean) => {
       return `The product name is ${title} and price is ${price}`
}

console.log(product('samsung', 23000, true ))