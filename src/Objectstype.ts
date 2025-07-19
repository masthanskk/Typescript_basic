
 
/* const Apple = {
        color :'red',
        price : 250,
        discount : true
 } */ // here Apple is declare but value never asign


 // Explicity way // here in Explicity we can use UNION also

  
  const apple : {color:string | number, price:number, discount:boolean} = {
        color :'red',  // color: 50
        price : 250,
        discount : true
 }

   const mango : {color:string | number, price:number, discount:boolean} = {
        color :'red',  // color: 50
        price : 250,
        discount : true
 }

 
 apple.color = 'lite red'
 apple.price = 200
 apple.discount = false

  
 mango.color = 'lite red'
 mango.price = 200
 mango.discount = false


 console.log('fruit APPLE color', apple.color)
 console.log('fruit APPLE price', apple.price)
 console.log('fruit APPLE discount', apple.discount)

 console.log('fruit MANGO color', mango.color)
 console.log('fruit MANGO price', mango.price)
 console.log('fruit MANGO discount', mango.discount)




 // If we have 2 or more Objects we may have to write this its a good APPROCH

 type fruitType = {color:string | number, price:number, discount:boolean}


 const banana : fruitType = {
        color :'green',  // color: 50
        price : 250,
        discount : true
 }

   const graps : fruitType = {
        color :'black',  // color: 50
        price : 150,
        discount : true
 }

 banana.color = 'yellow'
 banana.price = 200
 banana.discount = false

  
 graps.color = 'white'
 graps.price = 100
 graps.discount = false


 console.log('fruit BANANA color', banana.color)
 console.log('fruit BANANA price', banana.price)
 console.log('fruit BANANA discount', banana.discount)

 console.log('fruit GRAPS color', graps.color)
 console.log('fruit GRAPS price', graps.price)
 console.log('fruit GRAPS discount', graps.discount)

// if we want to run this file open index.html , rewrite the 
// <script type="module" src="/src/Objectstypes.ts"></script>

// Inference & Annotations
const car ={
       color:'red',
       price: 22,
       model: false
}

car.color = 'blue'
car.price = 20
car.model = true

// Inference that already check what before object is hold value type like 
// Color: 'red' it means already knowing the whats value is string. price:50 it means price save value type number
// model: false we have given false it means boolean model holds boolean value  