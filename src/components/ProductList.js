import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {

  const { filtered_products: products, grid_view} = useFilterContext()

  if(products.length < 1){
    return(
      <h5 style={{textTransform:'none'}}>
        Désolé, aucun produit ne correspond à votre recherche...
      </h5>
    )
  }
  if(!grid_view){
    return <ListView products={products}/>
  }
  return <GridView products={products}>

  </GridView>
}

export default ProductList
