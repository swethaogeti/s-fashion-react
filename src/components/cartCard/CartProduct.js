
import '../cartCard/cartProduct.css'
import { useCartContext } from '../../context/cartWishlistContext'
import { Link } from 'react-router-dom';
const CartProduct = ({image,brand,id,title,price,discount,total_price,amount}) => {
  const {cartState,cartDispatch}=useCartContext();
  const {cart,wishlist,total}=cartState;
 
  return (

<div className='cart-product'>

<div className="horizontal-card-container flex-box">
<div>
<img src={image} className="image-responsive product-img  img-container"/>
</div>

<div className="hz-description-container description-container">
<h2>{brand}</h2>
<p>{title}</p>

<div className="price-container">
<span className="discount-price">{price}</span>
<span><s>{total_price}</s></span>                             
<span className="discount-percent">({discount}% 0ff)</span>
</div>
<div className='icon-btn'>
<button onClick={()=>{cartDispatch({type:'DECREASE',item:id})}}
><i className='fa fa-minus'></i></button>
<span>{amount}</span>
<button onClick={()=>{cartDispatch({type:'INCREASE',item:id})}} 

><i className='fa fa-plus'></i></button>
</div>
<div className="hz-btn-container flex-box-default">
<button className="btn btn-primary"
onClick={()=>{cartDispatch({type:'REMOVE_FROM_CART', item:id})}}
>DELETE</button>

{wishlist.some((i)=>i.id===id)?(<Link to='/wishlist'>
<button className=' o-btn-primary btn btn-link' 
   >PRODUCT ADDED TO WISHLIST</button>
</Link>):(<button className="btn o-btn-primary" 
onClick={()=>{cartDispatch({type:'ADD_TO_WISHLIST',item:{image,brand,title,id,price,discount,total_price}})}}
>ADD TO WISHLIST</button>
)}
 

</div>
</div>


 
</div>
</div>
  ) 
}

export default CartProduct