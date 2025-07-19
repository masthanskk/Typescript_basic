 
 // Type Inference
 const cities = ['Hyderabad','Ongole','Nellore','Tirupati']
 cities[0] = 'Vijayawada' // here it doesnt get arrow why means cities alreay save a data type string so Only accepted string data type
 // cities[0] = 3 // it shows error its a number data type here accept only string data type

 const members = [1,1,2,3,4,5]
 members[0] =0// output will be [0,1,2,3,4,5]
  // Its  A Inference flow


  // Shorthand Notation

  let Cityicon:string[] = ['Hyd','Ong','Vij','Nlr'] // Shorthand Notation
  Cityicon[0] ='Bng' // it accepts
  
  let Cityname:string[] | number[] = ['Hyd','Ong','Vij','Nlr']
  Cityname[0] ='Bng'// it accepte
  // Cityname[1] = 3 // it doesnot accept 

  // Because the Array is completly in string, It accepts only String data type
  // When we pass a number to Array it doesnot accepts
  // Because Main Array values should be always either String value or Number 
  // Ex: 
   let Citynum:string[] | number[] = [1,1,2,3,4,5,6]
         Citynum[0] = 0 // here it accepts 
   
  // ShortHand Notation is nothing but taking array it should be complete String or Number data type thats the flow of shorthand Notation
  
  

