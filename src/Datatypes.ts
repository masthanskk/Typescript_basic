// Explicit & Implicity

// Implicity

let captain = 'Dhoni'  // here the implicity works initial 'captain' is declared but its value is never read

let score = 22
let winner = true     // here the implicity works initial 'winner' is declared but its value is never read

captain = 'Rohith'  // here the output rohith
captain = 'Sharma'  // here the output Sharma

// score = 87

winner = false      // here the output false

console.log(captain,score)




// Explicit 

let name : string = 'Alice'; // Explicitly defining name as a string
let phone : number = 29 ;    // Explicitly defining name as a number
let male : boolean = true;   // Explicitly defining name as a boolean

console.log(name, phone, male)

// any
let userName : any

userName = 'kalyan'
userName = true
userName = 29

// Union      string | number | boolean
let cityName: string | number | boolean

cityName = 'hyd'
cityName = 22
cityName = true


// if we want to run this file open index.html , rewrite the 
// <script type="module" src="/src/Datatypes.ts"></script>