

        // enum

        // pascalCase
enum Color{
        App_Name = 'my_app_page',
        Red = 'red',
        Blue = 'blue',
        Green = 'green',
        Orange = 'orange'
}

// console.log(Color.App_Name)

let color : Color = Color.App_Name;
console.log(color);

// const small = 1
// const medium = 2
// const large =3

// console.log(medium)

enum Size {
        small = 1,
        medium = 2,
        large = 3
}

let size : Size = Size.large
console.log(size)

export enum Power_house {
        Supply = '100vh',
        Transport = 10000,
        ECM = '250hv'
}

// Power_house is exported to Tuple_topic


        // Unknown type

const notSure : unknown = 265.724552;

if(typeof(notSure) === 'number'){
         const formated = notSure.toFixed(2);
         console.log(formated)
} else if(typeof(notSure) === 'string'){
        notSure.length;
}
// console.log(notSure);


        // never type

  function infiniteloop() : never{
        while(true){
        console.log(1) // it continously run untile server stop
}
  }
 
  function throwError(message: string) : never{
        throw new Error(message)

  }
   throwError('Some thing went wrong please check')
 