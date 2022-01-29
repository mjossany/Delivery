import React from 'react';
import { PropTypes } from 'prop-types';

const ProductOverview = ({ product }) => {
  const { name, price } = product;
  return (
    <div>
      <h1>{name }</h1>
      <p>{price}</p>
    </div>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductOverview;
