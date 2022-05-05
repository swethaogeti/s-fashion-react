import React from 'react'
import { WishlistProduct } from '../../components'
import { useCartContext } from '../../context/cartWishlistContext'
import '../wishlist/wishlist.css'
function Wishlist() {
  const {cartState,cartDispatch}=useCartContext()
  const{wishlist}=cartState
 
  return (
<div className='wishlist-page'>
<h2>My Wishlist ({wishlist.length})</h2>
<div className='wishlist-layout'>
{wishlist.map((product)=>{
  return  <WishlistProduct key={product.id} {...product}/>
})}
</div>
</div>  
  )
}

export default Wishlist