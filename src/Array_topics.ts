 
 // Type Inference
 const cities = ['Hyderabad','Ongole','Nellore','Tirupati']
 cities[0] = 'Vijayawada' // No Error
 // cities[0] = 3  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

 const members = [1,1,2,3,4,5]
 members[0] =0// output will be [0,1,2,3,4,5]
  // Its  A Inference flow


  // Shorthand Notation

  let Cityicon:string[] = ['Hyd','Ong','Vij','Nlr'] // Shorthand Notation
  Cityicon[0] ='Bng' // it accepts
  
  let Cityname:string[] | number[] = ['Hyd','Ong','Vij','Nlr']
  Cityname[0] ='Bng'// it accept
  // Cityname[1] = 3 // it doesnot accept 

  // Because the Array is completly in string, It accepts only String data type
  // When we pass a number to Array it doesnot accepts
  // Because Main Array values should be always either String value or Number 
  // Ex: 
   let Citynum:string[] | number[] = [1,1,2,3,4,5,6]
         Citynum[0] = 0 // here it accepts 
         
   
  // ShortHand Notation is nothing but taking array it should be complete String or Number data type thats the flow of shorthand Notation
  
  // Generic Type Notation

  const countries : Array< string | number > = ['India', 67, 'Russia'] // That means this Countries is Array that accepets String and number

  countries[2] = 35
  countries[1] = 'US'
  // countries[0] = true  // Error because boolean is not asigned in Array.
  // That is the flow of Generic 


  // Any 


   const Countries : Array< any > = ['India', 67, 'Russia', true, {city:'Ap'}]
   Countries[0] = 5;
   Countries[1] = 'UK'
   Countries[2] = false
   // It Accepts any Data type Because we have given ANY in Command
