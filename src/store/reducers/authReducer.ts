import { AuthAction } from "./actions"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
	
	isLoggedIn: false;
	loading: 'idle' 
  }

  const initialState = {
	isLoggedIn: false,
	loading: 'idle',
	
   }
   

 
	const BASE_URL = 'http://localhost:5000' 
	export const fetchAuth = createAsyncThunk(
		'auth/fetchAuth',
		async (dataUser: { username: string; password: string }, thunkApi) => {
		  const responseAuth = await fetch(BASE_URL + '/auth', { method: 'GET' });
		  const auth = await responseAuth.json(); 
		
		  return auth;
		 
		}
	  );

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},

		extraReducers: (builder) => {
				builder.addCase(fetchAuth.pending, (state) => {
				state.loading = 'pending';
			  })
			  builder.addCase(fetchAuth.fulfilled, (state, action) => {
				const { username, password } = action.meta.arg;
				const responseUser = action.payload;
				if (username === responseUser.username && password === responseUser.password) {
				  state.isLoggedIn = true;
				  state.loading = 'succeeded';
				} else {
				  state.isLoggedIn = false;
				  state.loading = 'failed';
				}
			  })
			  builder.addCase(fetchAuth.rejected, (state) => {
				state.isLoggedIn = false;
				state.loading = 'failed';
			  });
		
	}
})

const authReducer = authSlice.reducer
export default authReducer;
