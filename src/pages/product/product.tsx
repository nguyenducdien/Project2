

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories,fetchColors,fetchProducts } from '../../store/reducers/productsReducer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AppDispatch } from '../../store';

const ProductTable: React.FC = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: any) => state.product.products);
  const categories = useSelector((state: any) => state.product.categories);
  const colors = useSelector((state: any) => state.product.colors);

 /* useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchColors());
  }, [dispatch]);*/

  const getColorNames = (colorIds: number[]) => {
    return colorIds.map((id) => {
      const color = colors.find((c: any) => parseInt(c.id) === id);
      return color ? color.name : '';
    }).join(' ');
  };
  

  const getCategoryName = (categoryId: number) => {
    const category = categories.find((c: any) => parseInt(c.id) === categoryId);
    return category ? category.name : '';
  };

  const totalAvailable = products.reduce((sum: number, p: any) => sum + Number(p.available), 0);
  const totalSold = products.reduce((sum: number, p: any) => sum + p.sold, 0);
  const totalRevenue = products.reduce((sum: number, p: any) => sum + (Number(p.price) * p.available), 0);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Available</TableCell>
            <TableCell>Sold</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: any, index: number) => (
            <TableRow key={product.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.available}</TableCell>
              <TableCell>{product.sold}</TableCell>
              <TableCell>{getCategoryName(product.categoryId)}</TableCell>
              <TableCell>{getColorNames(product.colorIds)}</TableCell>
              <TableCell>{Number(product.price).toLocaleString()}</TableCell>
              <TableCell align="center">
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}><strong>Total:</strong></TableCell>
            <TableCell><strong>{totalAvailable}</strong></TableCell>
            <TableCell><strong>{totalSold}</strong></TableCell>
            <TableCell colSpan={2}></TableCell>
            <TableCell><strong>{totalRevenue.toLocaleString()}</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;

