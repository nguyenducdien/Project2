// src/App.tsx
import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


interface Color {
    id: string;
    name: string;
  }
interface Category {
    id: string;
    name: string;
  }
interface Product {
  id: string;
  name: string;
  available: number | string;
  price: number | string;
  colorIds: number[];
  categoryId: number;
  sold: number;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [colors, setColors] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setColors(data.colors);
        setCategories(data.categories);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const getColorNames = (colorIds: number[]) => {
    if(!colors.length) return "Unknown"
    console.log(colors)
    console.log("color ID",colorIds)
    return colorIds.map((colorId) => {
    const color = colors.find((c) => parseInt(c.id) === colorId);
      console.log("color",color)
      return color ? color.name : '';
    }).join('');
  };
  const getCategoryName = (categoryId: number) => {
    const category = categories.find((c) => parseInt(c.id) === categoryId);
    return category ? category.name : '0';
  };

  //const totalsp= products.reduce((total, product)=> total + )
  const totalAvali= products.reduce((total, product)=> total + Number(product.available), 0)
  const totalSold= products.reduce((total, product)=> total + product.sold, 0)
  const total= totalAvali+totalSold;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Available</TableCell>
            <TableCell align="right">Soil</TableCell>   
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">{product.available}</TableCell>
              <TableCell align="right">{product.sold}</TableCell>
              <TableCell align="right">{getCategoryName(product.categoryId)}</TableCell>
              <TableCell align="right">{getColorNames(product.colorIds)}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="Edit">
                <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                <DeleteIcon />
                </IconButton>
              </TableCell>
             
            </TableRow>

       
          ))}
        
              <TableRow >
              <TableCell rowSpan={4} />
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{total}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Available</TableCell>
              <TableCell align="right">{totalAvali}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Sold</TableCell>
              <TableCell align="right">{totalSold}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Revenue</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
        
        
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Product;
