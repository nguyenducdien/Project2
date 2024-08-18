
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

;

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('http://localhost:5000/products',{method:'GET'});
  return response.json();
});

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch('http://localhost:5000/categories', {method:'GET'});
  return response.json();
});

export const fetchColors = createAsyncThunk('colors/fetchColors', async () => {
  const response = await fetch('http://localhost:5000/colors', {method:'GET'});
  return response.json();
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    categories: [],
    colors: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.colors = action.payload;
    });
  },
});
const productReducer = productSlice.reducer;
export default productReducer;

