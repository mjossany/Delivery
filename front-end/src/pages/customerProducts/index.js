import React, { useContext } from 'react';
import NavBar from '../../components/navbar';
import { ProductsContext } from '../../context/products';

function CustomerProducts() {
  const { products } = useContext(ProductsContext);

  console.log(products);
  return (
    <main>
      <NavBar />
    </main>
  );
}

export default CustomerProducts;
