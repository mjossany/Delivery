import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import { CartContext } from '../../context/cart';
import { ProductsContext } from '../../context/products';
import { Container } from '../../styles';
import ProductOverview from './components/productOverview';
import { GoToCartButton, ProductsContainer } from './styles';

function CustomerProducts() {
  const { products } = useContext(ProductsContext);
  const { total, cart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <Container>
      <NavBar />
      <ProductsContainer>
        {
          products.map((product) => (
            <ProductOverview
              key={ product.id }
              product={ product }
            />
          ))
        }
      </ProductsContainer>
      <GoToCartButton
        onClick={ () => navigate('/customer/checkout') }
        data-testid="customer_products__button-cart"
        disabled={ cart.length === 0 }
      >
        Ver carrinho
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          { String(total.toFixed(2).replace('.', ',')) }
        </p>
      </GoToCartButton>
    </Container>
  );
}

export default CustomerProducts;
