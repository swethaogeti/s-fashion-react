
export const inStockFilter=(products,filterInStock)=>{
   return products.filter((item)=>filterInStock?item.inStock===true:item);
}

export const fastDeliveryFilter=(products,filterFastDelivery)=>{
    return products.filter((item)=>filterFastDelivery?item.fastDelivery===true:item)
}

export const trendingFilter=(products,filterTrending)=>{
    return products.filter((item)=>filterTrending?item.trending===true:item)
}

export const rangeFilter=(products,filterRange)=>{
    return products.filter((item)=>item.price<=filterRange)
}

export const  searchFilter=(products,keyword)=>{
return products.filter((item)=>item.brand.includes(keyword.toUpperCase()))
}


export const sortProducts=(products,sortBy)=>{
    if(sortBy==='LOW_TO_HIGH'){
       return [...products].sort((a,b)=>a.price-b.price)
    }
    if(sortBy==='HIGH_TO_LOW'){
        return [...products].sort((a,b)=>b.price-a.price)
    }
    return products
}


export const sortByCategory=(products,shades,bag,watch,heels)=>{
    
    const tempStore=[]
if(bag===false&& heels===false&& shades===false&& watch===false){
    return products
}

if(bag===true){
    let temp=products.filter((item)=>item.category==='bag')
    tempStore.push(...temp)
}

if(watch===true){
    let temp=products.filter((item)=>item.category==='watch'
    )
    tempStore.push(...temp)
}

if(heels===true){
    let temp=products.filter((item)=>item.category==='heels')
 tempStore.push(...temp)
}
if(shades===true){
    let temp=products.filter((item)=>item.category==='shades')
    tempStore.push(...temp)
}
console.log(tempStore)
return tempStore;
} 

export const sortByBrand=(products,tommyHilfiger,fossil,daneilKlein,allenSolly)=>{
    const tempStore=[]

    if(tommyHilfiger===false&& fossil===false&& daneilKlein===false&& allenSolly===false){
        return products;
    }

    if(tommyHilfiger===true){
        let temp=products.filter((item)=>item.brand==='TOMMY HILFIGER')
     tempStore.push(...temp)
       console.log(temp)
    }

    if(fossil===true){
        let temp=products.filter((item)=>item.brand==='FOSSIL')
   tempStore.push(...temp)
   console.log(temp)
    }

    if(daneilKlein===true){
        let temp=products.filter((item)=>item.brand==='DANIEL KLEIN')
    tempStore.push(...temp)
     console.log(temp)
    }

    if(allenSolly===true){
        let temp=products.filter((item)=>item.brand==='ALLEN SOLLY')
    tempStore.push(...temp)
    console.log(temp)
    }
 
    return tempStore;
}
