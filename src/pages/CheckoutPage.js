import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="paiement" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Votre panier est vide.</h2>
            <Link to="/products" className="btn">
              Continuer mes achats
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  .empty{
     text-align: center;
  }
`;
export default CheckoutPage;
