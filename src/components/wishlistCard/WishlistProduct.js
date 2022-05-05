import React from 'react'
import '../wishlistCard/wishlistProduct.css'
import { useCartContext } from '../../context/cartWishlistContext'
const WishlistProduct = ({image,brand,id,title,price,discount,total_price,amount}) => {
    const {cartState,cartDispatch}=useCartContext()
    const {cart,whishlist,total}=cartState
    
  return (
    <div className='wishlist-prd product-card'>
    <div className="card-container flex-box-default">
    <div className="badge-container">
    <img src={image} className="image-responsive product-img"/>
                        
 </div>
 
 {cart.some((i)=>i.id===id)
    ?(<div className='badge text-badge icon-badge active-icon'><i className='fas fa-shopping-cart' ></i></div>)
    
 :(<div className='badge text-badge icon-badge'><i className='fas fa-shopping-cart' onClick={()=>cartDispatch({type:'ADD_TO_CART',item:{image,brand,title,id,price,discount,total_price,amount}})} ></i></div>)}
 

 <div className='badge text-badge icon-badge-trash'><i className='fa fa-trash' onClick={()=>{cartDispatch({type:'REMOVE_FROM_WISHLIST',item:id})}}></i></div>
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

export default WishlistProduct