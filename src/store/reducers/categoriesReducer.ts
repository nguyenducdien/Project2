// src/store/categorySlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await fetch('http://localhost:5000/categories', {method:'GET'});
    return response.json();
  });
  interface CategoryState {
    categories: { id: string; name: string }[];
    loading: boolean;
  }
  const initialState: CategoryState = {
    categories: [],
    loading: false,
  };
const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loading = false;
    });
  },
});

const categoriesreducer=categorySlice.reducer

export default categoriesreducer;
