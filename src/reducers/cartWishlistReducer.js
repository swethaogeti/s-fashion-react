export const initialCart={
    cart:[],
    wishlist:[],
    total:0,
    amount:0,
    discount:0
}

export const CartReducer=(initialCart,action)=>{


   switch(action.type){
       case 'ADD_TO_CART':
           return{
               ...initialCart,
               cart:[...initialCart.cart,{...action.item}]
           }

           case 'REMOVE_FROM_CART':
               return {
                   ...initialCart,
                   cart:initialCart.cart.filter((i)=>i.id!==action.item)
               }

               case 'ADD_TO_WISHLIST':
               return {
               ...initialCart,
               wishlist:[...initialCart.wishlist,{...action.item}]
               }

               case 'REMOVE_FROM_WISHLIST':
                   return {
                       ...initialCart,
                       wishlist:initialCart.wishlist.filter((i)=>i.id!==action.item)
                   }

                   case 'INCREASE':
                       let tempCart=initialCart.cart.map((cartItem)=>{
                           if(cartItem.id===action.item&& cartItem.amount<=9){
                               return {...cartItem,amount:cartItem.amount+1}
                           }
                           return cartItem
                       })
                       return {...initialCart,cart:tempCart}

                       case 'DECREASE':
                           let temp=initialCart.cart.map((cartItem)=>{
                               if(cartItem.id===action.item){
                                   return {...cartItem,amount:cartItem.amount-1}
                               }
                               return cartItem
                           }).filter((cartItem)=>cartItem.amount!==0)
                           return {...initialCart,cart:temp}

                case 'GET_TOTALS':
                    let {total,amount,discount}=initialCart.cart.reduce((cartTotal,cartItem)=>{
                     const {total_price,amount,discount,price}=cartItem
                     const itemTotal=total_price*amount
                     cartTotal.total+=itemTotal
                     cartTotal.amount+=amount
                     cartTotal.discount+=amount*price
                        return cartTotal
                    },{total:0,amount:0,discount:0})  
                    return{...initialCart,total,amount,discount}       
   }
}