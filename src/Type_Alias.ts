
        // Type Alias

type dataSampleType = string|number  

// type dataSampleType = string|number|boolean 
interface product {
        name: dataSampleType,
        description: dataSampleType,
        price: dataSampleType,
        discount: dataSampleType | boolean,

}

const SampleType : product= {
        name: 'Samsung',
        price: 15000,
        description: 'Samsung Xy ',
        discount: true
}

console.log(`New model lanched in ${SampleType.name} and price is less ${SampleType.price}
        mobile features ${SampleType.description} will have discount 200 ${SampleType.discount}`)