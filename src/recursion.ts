

        //recursive type (recursive data structure)

 type Tree = {
        value:string,
        children: Tree[]
 }       

 let tree : Tree ={
        value:'Parent',
        children: [{
                value: 'Fisrt Child',
                children:[{
                        value:'Second Child',
                        children:[]
                }]
        }]
 }

 console.log(tree)

 // Recursion In Function

  type Store = {
        store: number,
        NumberofStores: []
  }

  function companyStore( node:Store, indent = ''):void{
        console.log(indent + node.store);
        for (const Singlestore of node.NumberofStores){
                companyStore(Singlestore, indent + ' ');
        }
  }
  console.log(companyStore)