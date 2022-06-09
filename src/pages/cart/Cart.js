import React from 'react'
import { useCartContext } from '../../context/cartWishlistContext'
import { CartProduct, Checkout } from '../../components'
import '../cart/cart.css'

function Cart() {
  const {cartState,cartDispatch}=useCartContext()
  const {cart,amount}=cartState 
 
  return (
    <div className='cart-layout'>
    <h2 className='cart-layout-h2'>My Cart ({amount})</h2>
    <div className='cart-page'>
    {amount===0&&<h2 className='cart-page-h2'>YOUR SHOPPING CART IS EMPTY!!</h2>}
    <div className='cart-page-left'>
    <div className='cart'>
    {cart.map((product)=>{
      return  <CartProduct key={product.id} 
      {...product}></CartProduct>
    })}
   
    </div>
    </div>
    <div className='cart-page-right'>
  {amount!==0&&<Checkout/>} 
    </div>
   
    </div>
    
    </div>
    
   
  )
}

export default Cart