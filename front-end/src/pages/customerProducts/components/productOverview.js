import React from 'react';

const ProductOverview = ({ product }) => {
  const { name, price, url_image } = product;
  return (
    <div>
      <img src={ url_image } alt={ name } />
      <h1>{name }</h1>
      <p>{price}</p>
    </div>
  );
};

export default ProductOverview;
