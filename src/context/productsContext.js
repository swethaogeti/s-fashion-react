import axios from "axios";
import { createContext } from "react";
import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { GET_PRODUCTS } from "../actions";
import productReducer from "../reducers/productReducer";
const initialState={
    products:[]
}

 const ProductContext=createContext();
 
 export const ProductProvider=({children})=>{
const[state,dispatch]=useReducer(productReducer,initialState);

const fetchProducts= async()=>{
    const response=await axios.get('/api/products');
  const products=response.data.products;
    dispatch({type:GET_PRODUCTS,payload:products})
}

useEffect(()=>{
    fetchProducts()
},[])
    return(
    <ProductContext.Provider value={{...state}}>{children}</ProductContext.Provider>
    )
}

 export const useProductContext=()=>{
    return useContext(ProductContext);
}