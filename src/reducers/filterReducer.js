export function filterReducer(state,action){
    switch(action.type){
      case 'IN_STOCK':
       
        return {...state,inStock:!state.inStock}
   
        case 'FAST_DELIVERY':
          return {...state,fastDelivery:!state.fastDelivery}

          case 'RANGE':
            return {...state,range:action.payload}
   case 'TRENDING':
     return{
       ...state,
       trending:!state.trending
     }
          case 'SORT':
            return {...state,sortBy:action.payload}
   
            case 'HEELS':
              return {...state,
             catagories:{...state.catagories,heels:!state.catagories.heels} 
              }
   
              case 'SHADES':
                return {
                  ...state,
                  catagories:{...state.catagories,shades:!state.catagories.shades}
                }
                case 'BAGS':
                  return {
                    ...state,
                    catagories:{...state.catagories,bags:!state.catagories.bags}
                  }
                  case 'WATCHES':
                    return {
                      ...state,
                      catagories:{...state.catagories,watches:!state.catagories.watches}
                    }
                    case 'TOMMY-HILFIGER':
                      return {
                        ...state,
                        brands:{...state.brands,tommyHilfiger:!state.brands.tommyHilfiger}
                      }
                    
                      case 'FOSSIL':
                        return {
                          ...state,
                          brands:{...state.brands,fossil:!state.brands.fossil}
                        }
                    

                        case 'DANEIL-KLEIN':
                        return {
                          ...state,
                          brands:{...state.brands,daneilKlein:!state.brands.daneilKlein}
                        }


                        case 'ALLEN-SOLLY':
                        return {
                          ...state,
                          brands:{...state.brands,allenSolly:!state.brands.allenSolly}
                        }

               case 'CLEAR':
                 return{
                  sortBy:null,
                  catagories:{
                    bags:false,
                    watches:false,
                    heels:false,
                    shades:false,
                   
                  },
             brands:{
               tommyHilfiger:false,
               fossil:false,
               daneilKlein:false,
               allenSolly:false,
             },
             
                  fastDelivery:false,
                 inStock:false,
                 trending:false,
             range:5000
                 }         

                        


               
    
   }
   }
   
 export  const initialState={
     sortBy:null,
     catagories:{
       bags:false,
       watches:false,
       heels:false,
       shades:false,
      
     },
brands:{
  tommyHilfiger:false,
  fossil:false,
  daneilKlein:false,
  allenSolly:false,
},

     fastDelivery:false,
    inStock:false,
    trending:false,
range:5000
   }