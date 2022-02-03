import React from 'react';
import { PropTypes } from 'prop-types';
import { Product, ProductImage } from '../styles';
import CartMenu from '../../../components/cartMenu';

const ProductOverview = ({ product }) => {
  const { name, price, urlImage } = product;
  return (
    <Product>
      <ProductImage src={ urlImage } />
      <h1>{name }</h1>
      <p>{price}</p>
      <CartMenu product={ product } />
    </Product>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductOverview;
