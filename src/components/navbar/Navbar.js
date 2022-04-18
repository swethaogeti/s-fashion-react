import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
<div className='header'>
<Link to='/' className='logo'>SWETHA</Link>

<nav className='navbar'>
<Link to='/' className='nav-links'>Home</Link>
<Link to='/products' className='nav-links'>Shop Now</Link>
</nav>

<form className='search-bar-container'>
<input type='search' id='search-bar' placeholder='search here'></input>
<label htmlFor='search-bar' className='fas fa-search'></label>
</form>

<div className='icons'>
<Link to='/wishlist' className='fas fa-heart icon-link'></Link>
<Link to='/cart' className='fas fa-shopping-cart icon-link'></Link>
<Link to='/login' className='fas fa-user-circle icon-link'></Link>

</div>

</div>   

  )
}

export default Navbar