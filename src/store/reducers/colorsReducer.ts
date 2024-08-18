import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchColors = createAsyncThunk('colors/fetchColors', async () => {
    const response = await fetch('http://localhost:5000/colors', {method:'GET'});
    return response.json();
  });
  export const addColor = createAsyncThunk('colors/addColor', async (newColor: { name: string }) => {
    const response = await fetch('http://localhost:5000/colors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newColor),
    });
    return response.json();
});
interface ColorState {
  colors: { id: string; name: string }[];
  loading: boolean;
}
const initialState: ColorState = {
  colors: [],
  loading: false,
};

const colorsSlice = createSlice({
  name: 'colors',
  initialState: { colors: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.colors = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchColors.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchColors.rejected, (state) => {
      state.loading = false;
  });

    builder.addCase(addColor.fulfilled, (state, action) => {
      state.colors = action.payload; 
  });

  },
});

const colorsReducer =colorsSlice.reducer;
export default colorsReducer;
