
function apple(){
        return 'this is string'
}

let a = 99;
let b = 'ravi'

function user(){
        return a
}

// function Expression

 const addingNumbers =  function(d:number, c:number):number{
        return d+c
 }

 addingNumbers(54, 46)

 // Optional Parameters

 const product = (title: string, price:number, discount?:boolean)=>{
        return `The product name is ${title} and price is ${price}`
 }

        console.log(product('samsung', 23000, true))