import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'

import { IEmailPassword } from '@/store/auth/auth.types'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Login: FC = () => {
	const { isLoading, isLoggedIn } = useAuth()

	const { push } = useRouter()

	useEffect(() => {
		if (isLoggedIn) push('/')
	}, [isLoggedIn])

	const [inputData, setInputData] = useState<IEmailPassword>({
		email: '',
		password: ''
	})

	const { login } = useActions()

	return (
		<Layout title='Login'>
			<div className='flex flex-col items-center justify-center h-[46rem]'>
				<h1 className='text-2xl uppercase font-medium  tracking-[0.15em] p-5'>
					Login
				</h1>
				<input
					onChange={e => setInputData({ ...inputData, email: e.target.value })}
					value={inputData.email}
					placeholder='Enter email'
					className='flex justify-start items-center h-12 rounded-md bg-black m-4 p-8 text-lg text-white'
				/>
				<input
					type='password'
					onChange={e =>
						setInputData({ ...inputData, password: e.target.value })
					}
					value={inputData.password}
					placeholder='Enter password'
					className='flex justify-start items-center h-12 rounded-md bg-black m-4 p-8 text-lg '
				/>
				{}
				<button className='btn-shadow' onClick={() => login(inputData)}>
					Login
				</button>
			</div>
		</Layout>
	)
}

export default Login
