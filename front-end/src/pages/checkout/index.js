import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
  const { cart, removeProduct } = useContext(CartContext);
  return (
    <Container>
      <NavBar />
      <TableContainer component={ Paper }>
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
              cart.map((product) => (
                <TableRow key={ product.id }>
                  <TableCell align="right">{product.id}</TableCell>
                  <TableCell align="right">{product.name}</TableCell>
                  <TableCell align="right">{product.quantity}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.quantity * product.price}</TableCell>
                  <TableCell align="right">
                    <button type="button" onClick={ () => removeProduct(product) }>
                      Remover
                    </button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Checkout;
