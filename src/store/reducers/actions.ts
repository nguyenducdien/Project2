import { createAction } from '@reduxjs/toolkit';
interface LoginPayload {
	email: string;
	password: string;
  }

export const AuthAction = {
	//LOGIN: createAction<LoginPayload>('auth/login'),auth/fetchAuth
	LOGIN: createAction<LoginPayload>('auth/fetchAuth')
}
export const CHANGE_TAB = 'CHANGE_TAB'


