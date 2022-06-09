import React from 'react'
import '../checkout/checkout.css'
import { useCartContext } from '../../context/cartWishlistContext'
const Checkout = () => {

    const {cartState}=useCartContext();
  const {total,amount,discount}=cartState;
  return (
    <div className='checkout-container'>
    <div className="checkout-box">

    <h1>PRICE DETAILS</h1>
    <hr/>
    <div className="container-mini">
        <h3>Price({amount} items)</h3>
        <span>&#8377;{total}</span>
    </div>

    <div className="container-mini">
        <h3>Discount</h3>
        <span>- &#8377;{total-discount}</span>

    </div>

    <div className="container-mini">

        <h3>Delivery Charges</h3>
        <span>FREE</span>
    </div>

    <hr/>
    <div className="container-mini">
        <h1 className='container-mini-h1'>TOTAL AMOUNT</h1>
        <span>&#8377;{discount}</span>
    </div>
    <hr/>
    <p>You will save <span>&#8377;{total-discount}</span> on this order </p>
    <button className="btn btn-primary">PLACE ORDER</button>
</div> 
    
    </div>
  )
}

export default Checkout