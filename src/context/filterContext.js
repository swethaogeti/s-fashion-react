import { createContext, useContext, useReducer } from "react";
import { filterReducer,initialState } from "../reducers/filterReducer";

export const FilterContext=createContext();
export const FilterProvider=({children})=>{
    const [state,dispatch]=useReducer(filterReducer,initialState);
return(
    <FilterContext.Provider value={{state,dispatch}}>{children}</FilterContext.Provider>
)
}

export const useFilterContext=()=>{ 
    return useContext(FilterContext)
}

