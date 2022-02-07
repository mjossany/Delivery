/* eslint-disable react/jsx-max-depth */
import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import { Container } from '../../styles';
import NavBar from '../../components/navbar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Checkout = () => {
  const classes = useStyles();
  const {
    cart,
    removeProduct,
    total,
    postNewSale,
    deliveryAddress,
    deliveryNumber,
    setDeliveryAddress,
    setDeliveryNumber,
    setSellerId,
    sellers,
    fetchSellers,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const handleSale = async () => {
    try {
      const redirect = await postNewSale();
      if (redirect) {
        navigate(`/customer/orders/${redirect}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('loop8');
    if (sellers.length) return;
    fetchSellers();
  }, [fetchSellers, sellers]);

  return (
    <Container>
      <NavBar />
      <Table className={ classes.table } aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Valor Unitário</TableCell>
            <TableCell align="right">Sub-total</TableCell>
            <TableCell align="right">Remove item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            cart.map((product, index) => (
              <TableRow key={ product.id }>
                <TableCell
                  align="right"
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  align="right"
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {product.name}
                </TableCell>
                <TableCell
                  align="right"
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {product.quantity}
                </TableCell>
                <TableCell
                  align="right"
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { String((+product.price).toFixed(2).replace('.', ',')) }
                </TableCell>
                <TableCell
                  align="right"
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {
                    String((+product.quantity * +product.price)
                      .toFixed(2)
                      .replace('.', ','))
                  }
                </TableCell>
                <TableCell align="right">
                  <button
                    type="button"
                    onClick={ () => removeProduct(product) }
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                  >
                    Remover
                  </button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        total:
        {' '}
        { String(total.toFixed(2).replace('.', ',')) }
      </div>
      <div>
        <h1>Detalhes e endereço para entrega</h1>
        <input
          onChange={ ({ target }) => setDeliveryAddress(target.value) }
          value={ deliveryAddress }
          type="text"
          placeholder="Nome"
          data-testid="customer_checkout__input-address"
        />
        <select
          onChange={ ({ target }) => setSellerId(target.value) }
          data-testid="customer_checkout__select-seller"
        >
          {
            sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
              >
                {seller.name}
              </option>
            ))
          }
        </select>
        <input
          onChange={ ({ target }) => setDeliveryNumber(target.value) }
          value={ deliveryNumber }
          type="number"
          placeholder="Número"
          data-testid="customer_checkout__input-addressNumber"
        />
      </div>
      <div>
        <button
          onClick={ () => handleSale() }
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar compra
        </button>
      </div>
    </Container>
  );
};

export default Checkout;
