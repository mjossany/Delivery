import React from 'react';
import { PropTypes } from 'prop-types';
import { Product, ProductImage } from '../styles';
import CartMenu from '../../../components/cartMenu';

const ProductOverview = ({ product }) => {
  const { name, price, urlImage, id } = product;
  return (
    <Product>
      <ProductImage
        src={ urlImage }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h1
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </h1>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price }
      </p>
      <CartMenu product={ product } />
    </Product>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductOverview;
