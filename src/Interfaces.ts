
// Interface

let long = 'height'; // typescript infers the type as string

interface Student {
        name: string,
        age: number,
        height?: string
}

const student: Student = {
        name: 'varun',
        age: 25,
}

console.log(student)

const newStudent: Student = {
        name: 'sid',
        age: 26,
        height: '155 cms'
}

console.log(`student name is ${newStudent.name} and ${newStudent.age} his height ${newStudent.height}`)

// Interface with function type

interface Mathop {
        name: string,
        id: number
        greet(): void
}

function greet() {
        console.log('rakesh master is alive')
}

let mathsOP: Mathop = {
        name: 'rakesh',
        id: 33,
        greet
}

console.log(mathsOP)
mathsOP.greet()

interface Candidate {
        name: string,
        age: number,
        death(): void
}

function death() {
        console.log(' rakesh master is no more ')
}

let DeathCand: Candidate = {
        name: 'rakesh',
        age: 67,
        death
}

console.log(DeathCand)
DeathCand.death()

// Inheritance

interface Team {
        name: string,
        age: number,
        height?: string
}

interface player extends Team {
        play: string
}

const Player: player = {
        name: 'Varun',
        age: 27,
        height: '167cms',
        play: 'Righ Hand Batter'
}

console.log(`In our team new person name ${Player.name} he is a ${Player.play}
                age ${Player.age} and heigh ${Player.height}`)


// type assertions
let Somevalue: any = 'Welcome'
let strLength: number = (Somevalue as string).length;
console.log(strLength);


// typs narrowing
function isStr(id: string | number) {
        console.log(`Checking the values ${id}`)
}

isStr('abc')
isStr(445)


function College(id: string | number) {
        if (id === 'string') {
                console.log('In college have list of id', id)

        } else {
                console.log('Particular Student name is', id)
        }
}
College('masthan') // output: Particular Student name is masthan

// & -> Intersection types

type Vehicle = {

        name:string,
        model:number
}

type Car = Vehicle & {
        isElectric : boolean
}

let myCar: Car ={
        name: 'TATA',
        model: 2023,
        isElectric: true
};
console.log(myCar)

let config : {server: string, port : number} & { secure : boolean, timeout: number } ={
        server: 'Localhost',
        port: 3400,
        secure: true,
        timeout: 10000 // thats means 10 sec
}

console.log(config)

// Optional Method ?
// Interface ?
interface Customer {
        name: string,
        phoneNumber: number,
        address? : string
}

let Info : Customer = {
        name: 'Shafi',
        phoneNumber: 8985592954,
           // Optional address : undefined
}
console.log(Info)

// Inheritance ?
               interface Customer {
                                  name: string,
                                     phoneNumber: number,
                                }

                interface CheckCustomer extends Customer  {
                                                 address? : string
                                        }                

                let Infomation : CheckCustomer = {
                                        name: 'Shafi',
                                        phoneNumber: 8985592954,
                                        address : undefined // address
                                        }
                         console.log(Infomation) 



// Type ?

type company = {
        location : string,
        pincode : number
}

type contact =  company & {
        ContactNumber ? : number
}

let CompanyDetails : contact ={
        location: 'Kondapur Hyderabada,Telangana',
        pincode: 530001,
        ContactNumber: undefined
}
console.log(CompanyDetails)




