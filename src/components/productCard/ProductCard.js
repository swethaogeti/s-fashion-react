import React from 'react'
import './productCard.css'
function ProductCard({image,brand,title,rating,id,price,discount,total_price,total_rating,trending}) {
  return (
      <div className='product-card' key={id}>
      <div className="card-container flex-box-default">
      <div className="badge-container">
      <img src={image} className="image-responsive product-img"/>
                              
  
   {trending&&  <div className="text-badge"><span className="badge primary-badge">Trending</span></div> }
   </div>
   
   
   <div className='badge text-badge icon-badge'><i className='far fa-heart' ></i></div>
   <div className="description-container">
   <h4>{brand}</h4>
   <p>{title}</p>
                              
   <div className="price-container flex-box-default"><span class="discount-price">{price}</span>
   <span><s>RS.{total_price}</s></span>
   <span className="discount-percent">({discount}% off)</span>
   </div>
   </div>
  
   </div>
      </div>
   
  )
}

export default ProductCard