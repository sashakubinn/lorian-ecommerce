import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { login, logout, register } from './auth.actions'
import { IAuthInitialState } from './auth.types'

const initialState: IAuthInitialState = {
	isLoggedIn: true,
	isLoading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, state => {
				state.isLoading = false
				state.isLoggedIn = true
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.isLoggedIn = false
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, state => {
				state.isLoading = false
				state.isLoggedIn = true
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.isLoggedIn = false
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.isLoggedIn = false
			})
	}
})
