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
  const { total } = useContext(CartContext);
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
      >
        Ver carrinho
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          { String(total).replace('.', ',') }
        </p>
      </GoToCartButton>
    </Container>
  );
}

export default CustomerProducts;
