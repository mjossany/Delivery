import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { CartContext } from '../../context/cart';
import { CartMenuButton, CartMenuContainer, CartMenuQuantity } from './styles';

const CartMenu = ({ product }) => {
  const {
    addToCart,
    cart,
    removeFromCart,
    manualHandleAddToCart,
  } = useContext(CartContext);

  return (
    <CartMenuContainer>
      <CartMenuButton
        onClick={ () => removeFromCart(product) }
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </CartMenuButton>
      <CartMenuQuantity
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        onChange={ (e) => manualHandleAddToCart(product, e.target.value) }
        value={ cart.find((p) => p.id === product.id)
          ? cart.find((p) => p.id === product.id).quantity : 0 }
      />
      <CartMenuButton
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        onClick={ () => addToCart(product) }
        type="button"
      >
        +
      </CartMenuButton
      >
    </CartMenuContainer>
  );
};

CartMenu.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartMenu;
