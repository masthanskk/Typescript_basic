
                        // Tuple


let friends:[string,number, boolean] =['varun', 23, true]
// It means Only Aceept sing string , single number, single boolean

// It doesn’t allow more than those 3 values (e.g., ['varun', 23, true, 'extra'] ❌)
// It doesn’t allow different types or order (e.g., [23, 'varun', true] ❌)


import { Power_house } from "./Enums"

let Power_Produce : Power_house = Power_house.Supply
console.log(Power_Produce)