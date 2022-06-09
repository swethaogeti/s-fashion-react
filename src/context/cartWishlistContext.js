import { createContext } from "react";
import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { CartReducer, initialCart } from "../reducers/cartWishlistReducer";



const CartContext=createContext();
export const CartWishlistProvider=({children})=>{
    const [cartState,cartDispatch]=useReducer(CartReducer,initialCart);

useEffect(()=>{
    cartDispatch({type:'GET_TOTALS'})
},[cartState.cart])
    return(
        <CartContext.Provider value={{cartState,cartDispatch}}>{children}</CartContext.Provider>
    )
}
export const useCartContext=()=>{
    return useContext(CartContext)
}