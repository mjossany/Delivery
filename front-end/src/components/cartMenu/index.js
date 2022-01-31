import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { CartContext } from '../../context/cart';
import { CartMenuButton, CartMenuContainer, CartMenuQuantity } from './styles';

const CartMenu = ({ product }) => {
  const { addToCart, cart, removeFromCart } = useContext(CartContext);

  return (
    <CartMenuContainer>
      <CartMenuButton onClick={ () => removeFromCart(product) } type="button">
        -
      </CartMenuButton>
      <CartMenuQuantity>
        {cart.find((p) => p.id === product.id)
          ? cart.find((p) => p.id === product.id).quantity : 0}
      </CartMenuQuantity>
      <CartMenuButton onClick={ () => addToCart(product) } type="button">
        +
      </CartMenuButton>
    </CartMenuContainer>
  );
};

CartMenu.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartMenu;
