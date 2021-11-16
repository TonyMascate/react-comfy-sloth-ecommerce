import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const {cart} = useCartContext()
  if(cart.length < 1){
    return (
      <>
        <PageHero title="Panier" />
        <Wrapper className="page-100">
          <div className="empty">
            <h2>votre panier est vide.</h2>
            <Link to="/products" className="btn">
              Nos produits
            </Link>
          </div>
        </Wrapper>
      </>
    );
  }
  return <main>
    <PageHero title='Panier'/>
    <Wrapper className='page'>
      <CartContent />
    </Wrapper>
  </main>
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 3rem;
      text-transform: none;
    }
  }
`

export default CartPage
