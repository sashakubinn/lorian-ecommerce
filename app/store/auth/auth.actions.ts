import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from './../../services/auth/AuthService'
import { IEmailPassword } from './auth.types'
import { IAuthResponse } from '@/services/auth/auth-service.interface'

/* register */

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
/* login */

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* logout */

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})
