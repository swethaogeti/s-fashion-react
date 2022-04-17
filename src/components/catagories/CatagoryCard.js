import React from 'react'
import { catagoryData } from '../../utils/data'
import './catagoryCard.css'
console.log(catagoryData)
function CatagoryCard() {
  return (
 
  <section className='products'>
  <h1> CATAGORIES TO BAG</h1>
<div className='container'>
{catagoryData.map((item)=>{
    return(
        <div className='catagory-card' key={item.id}>
       <img src={item.img} alt={item.title} className="image-responsive product-img img-container"></img>
       <h2>{item.title}</h2>
      </div>
    )
 })}

</div> 
  </section>        
  )
}

export default CatagoryCard