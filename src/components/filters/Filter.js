import React from 'react'
import { useFilterContext } from '../../context/filterContext'
import './filter.css'

function Filter() {
const {state,dispatch}=useFilterContext();
const{fastDelivery,sortBy,inStock,range,trending}=state
const {bags,watches,heels,shades}=state.catagories;
const {tommyHilfiger,fossil,daneilKlein,allenSolly}=state.brands
  return (
    <div className='filters'>
    
    <form onSubmit={e=>e.preventDefault()}>
    <div className='btn-container'>
    <h1>Filters</h1>
    <button className='btn btn-primary' onClick={()=>dispatch({type:'CLEAR'})} >clear Filters</button>
    </div>
   
    <div className="category margin-bottom">
             <h2>catagories</h2>
             
                <div className="input-item-2">
                    <input type="checkbox" id="watches" name='watches'
                    onChange={()=>dispatch({type:'WATCHES'})} checked={watches}
                    />
                    <label htmlFor="watches">Watches</label>
                </div>

                <div className="input-item-2">
                    <input type="checkbox" id="handbags" name='handbags'
                    onChange={()=>dispatch({type:'BAGS'})}  checked={bags}
                    />
                    <label htmlFor="handbags" >Handbags</label>
                </div>

                <div className="input-item-2">
                    <input type="checkbox" id="shades" name='handbags'
                    onChange={()=>dispatch({type:'SHADES'})} checked={shades}
                    />
                    <label htmlfor="shades" >Shades</label>

                </div>

                <div className="input-item-2">
                    <input type="checkbox" id="heels" name='heels'
                    onChange={()=>dispatch({type:'HEELS'})} checked={heels}
                    />
                    <label htmlfor="heels">Heels</label>
                </div>


                <h2>Brands</h2>

                <div className="input-item-2">
                <input type="checkbox" id="tommy-hilfiger" name='tommy-hilfiger'
                onChange={()=>dispatch({type:'TOMMY-HILFIGER'})} 
    checked={tommyHilfiger}
                />
                <label htmlfor="tommy-hilfiger">Tommy Hilfiger</label>
               </div>

               <div className="input-item-2">
               <input type="checkbox" id="fossil" name='fossil'
               onChange={()=>dispatch({type:'FOSSIL'})} 
               checked={fossil}
               />
               <label htmlfor="fossil">Fossil</label>
               </div>

               <div className="input-item-2">
               <input type="checkbox" id="daniel-klein" name='daneil-klein'
               onChange={()=>dispatch({type:'DANEIL-KLEIN'})} 
    checked={daneilKlein}
               />
               <label htmlfor="daniel-klein">Daneil klein</label>
                </div>

                <div className='input-item-2'>
                <input type='checkbox' id='allen-solly' name='allen-solly'
                onChange={()=>dispatch({type:'ALLEN-SOLLY'})} 
    checked={allenSolly}
                ></input>
                <label htmlFor='allen-solly'>Allen Solly</label>
                </div>


                <h2>Get Products By</h2>
                <div className='input-item-2'>
                <input type='checkbox' id='fastDelivery' name='fastDelivery'
                 onClick={()=>dispatch({type:'FAST_DELIVERY'})} checked={fastDelivery}
                
                ></input>
                <label htmlFor='fastDelivery'>fast Delivery</label>
                </div>

                <div className='input-item-2'>
                <input type='checkbox' id='inStock' name='inStock'
                onClick={()=>dispatch({type:'IN_STOCK'})} checked={inStock}></input>
                <label htmlFor='inStock'>In Stock</label>
                </div>
               

                <div className='input-item-2'>
                <input type='checkbox' id='trending' name='trending'
                 onClick={()=>dispatch({type:'TRENDING'})} checked={trending}
                
                ></input>
                <label htmlFor='trending'>Trending</label>
                </div>

                
           
         <div className='setRange'>
         <h2>Set Range</h2>
         <input type='range' min='0' max='5000' value={range} onChange={(e)=>dispatch({type:'RANGE',payload:e.target.value})}></input>
         </div>
         
    

     <h2>Sort by price</h2>

                <div class="input-item-2">
                <input type='radio' name='sort' onClick={()=>dispatch({type:'SORT',payload:'LOW_TO_HIGH'})} checked={sortBy&&sortBy==='LOW_TO_HIGH'} ></input>
                    <label htmlfor="lowToHigh"> Price- Low to High</label>
                </div>


                <div class="input-item-2">
                <input type='radio' name='sort' onClick={()=>dispatch({type:'SORT',payload:'HIGH_TO_LOW'})} checked={sortBy&& sortBy==='HIGH_TO_LOW'}></input>
                    <label htmlfor="highToLow">Price- High to Low</label>
                </div>
            
                </div>


    </form>
    </div>
  )
}

export default Filter