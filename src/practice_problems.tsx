// 1. Write a TypeScript function to calculate the factorial of a number with properties

function factorial(num: number): number {
        if (num == 0 || num == 1) return 1;
        return num * factorial(num - 1)
}

factorial(5) // 120


// 2. Define a function that accepts a user Object (
//   with name, age, gmail) and retruns a formatted string

interface userData {
        name: string,
        age: number,
        gmail: string
}

const user: userData = {
        name: 'masthan',
        age: 25,
        gmail: 'masthan.dev29@gmail.com'
}

function formatUser(user: userData): string {
        return `User ${user.name} (${user.age} yrs can be contatcted via ${user.gmail})`
}

console.log(formatUser(user)) // output:- (User masthan (25 yrs can be contatcted via masthan.dev29@gmail.com))

// 2nd Method
interface info {
        company: string;
        experience: number;
        location: string
}

function Profile(information: info): string {
        return `User ${information.company} (having ${information.experience} in react.js. Work location in ${information.location})`
}
console.log(Profile({
        company: 'PWC',
        experience: 4.7,
        location: 'hyderabad'
}));

// 3. Calculate Total Price: Write a TypeScript function that calculate the total price of an array 
// of product objects. Each product has a price and quality

interface Product {
        price: number,
        quantity: number
}

function calculateTotal(products: Product[]): number {
        return products.reduce(
                (total, product) => total + product.price * product.quantity, 0);
};

let cart: Product[] = [
        { price: 200, quantity: 6 },
        { price: 200, quantity: 4 }
]
calculateTotal(cart) // 
/*
console.log(calculateTotal([{
       price: 200,
       quantity: 5}
]))
*/

// 4. write a union type with two feilds Car and bye 

type carData = {
        type: 'Car',
        model: string,
        year: number,
        vehicle: string
}

type bikeData = {
        type: 'bike',
        brand: string,
        year: number,
        cc: number
}

type vehicleData = carData | bikeData

function getvehicleData(vehicle: vehicleData) {
        if (vehicle.type === 'Car') {
                console.log(`Car model ${vehicle.model} launch in ${vehicle.year}, ${vehicle.vehicle} engine`)
        } else {
                console.log(`Bike model ${vehicle.brand} launch in ${vehicle.year}, ${vehicle.cc} engine`)
        }
}

let carinfo: vehicleData = {
        type: 'Car',
        model: 'Classic',
        year: 2025,
        vehicle: 'Benz'
}

let bikeinfo: vehicleData = {
        type: 'bike',
        brand: 'Yamaha',
        year: 2024,
        cc: 800
}

getvehicleData(carinfo);
getvehicleData(bikeinfo)