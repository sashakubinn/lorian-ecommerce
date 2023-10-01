import Cookie from 'js-cookie'

export const saveTokenToStorage = async (accessToken: string) => {
	await Cookie.set('accessToken', accessToken)
}

export const removeTokenFromStorage = async () => {
	await Cookie.remove('deleteToken')
}
