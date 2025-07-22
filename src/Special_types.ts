
                // Void

//   function student() : void{
//    return 'masthan'    void does not retrun any value 
        
//   }
        

        function studentName(name:string){
                console.log("student name is:", name)
        }

        studentName('masthan')


     function addnumbers(a:number,b:number):void{
    //    return a+b // it doesn't retrun becasue void does not retrun any value 
     }


                // Null

              let a:null    //  NULL is used to explicityly assign as emptyvalue to a variable
              a= 'apple' 



            // Undefined

            let house : undefined; // UNDEFINED only accepts undefined values
            house:'welcome'
            console.log(house) // output UNDEFINED 

            
          // Never
          
          function filedConnection():never{
                throw new Error('Connection failed')
                
          }
                // Never we use in senarios like Throwing and Error or Failed Connection.
          function DBconnection(){
                try{
                        console.log('Db connected')
                } catch(error){
                        filedConnection()
                }
          }
                console.log(DBconnection)

