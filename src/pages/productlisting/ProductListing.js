import React from 'react'
import {Filter, ProductCard } from '../../components';
import { useFilterContext } from '../../context/filterContext';
import { useProductContext } from '../../context/productsContext'
import './productlisting.css'
import {inStockFilter,fastDeliveryFilter,sortProducts,sortByCategory,sortByBrand,trendingFilter,rangeFilter,searchFilter} from '../../utils/filterOperations'
function ProductListing() {

  const {products}=useProductContext();

const {state}=useFilterContext()

const {bags,watches,heels,shades}=state.catagories

const {tommyHilfiger,fossil,daneilKlein,allenSolly}=state.brands
const {sortBy,fastDelivery,inStock,range,trending,keyword}=state

const searchProducts=searchFilter(products,keyword);
const rangeFilterProducts=rangeFilter(products,range)
const stockFilterProducts=inStockFilter(rangeFilterProducts,inStock);

const fastDeliveryProducts=fastDeliveryFilter(stockFilterProducts,fastDelivery);

const trendingProducts=trendingFilter(fastDeliveryProducts,trending)

const sortByCategoryProducts=sortByCategory(trendingProducts,shades,bags,watches,heels)

const sortByBrandProducts=sortByBrand(sortByCategoryProducts,tommyHilfiger,fossil,daneilKlein,allenSolly)

const sortFinalProducts=sortProducts(sortByBrandProducts,sortBy)



  return (
    <div className='productlisting'>
    <Filter className='sidebar'></Filter>
   <div className='main-layout'>
   <div class="container-mini">
   <h1>Showing All Products</h1>
   <span>( products {sortFinalProducts.length})</span>
</div>

<div className='main'>
{sortFinalProducts.map((product)=>{
 return<ProductCard key={product.id} {...product}></ProductCard>
})}
</div>

   </div>
    </div>
  )
}

export default ProductListing