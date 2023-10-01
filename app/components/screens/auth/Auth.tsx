import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'

import { IEmailPassword } from '@/store/auth/auth.types'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Auth: FC = () => {
	const { isLoading, isLoggedIn } = useAuth()
	const { register } = useActions()

	const { push } = useRouter()
	const [inputData, setInputData] = useState<IEmailPassword>({
		email: '',
		password: ''
	})

	const [confirmedPassword, setConfirmedPassword] = useState<string>('')

	const handleConfirmPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmedPassword(e.target.value)
	}

	const isPasswordMatch = inputData.password === confirmedPassword

	useEffect(() => {
		if (isLoggedIn) push('/')
	}, [isLoggedIn])

	return (
		<Layout title='Register'>
			<div className='flex flex-col items-center justify-center h-[46rem]'>
				<h1 className='text-2xl uppercase font-medium  tracking-[0.15em] p-5'>
					Register
				</h1>
				<input
					type='email'
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
					className='flex justify-start items-center h-12 rounded-md bg-black m-4 p-8 text-lg'
				/>
				<input
					type='password'
					onChange={handleConfirmPasswordChange}
					value={confirmedPassword}
					placeholder='Confirm password'
					className={`flex justify-start items-center h-12 rounded-md m-4 p-8 bg-black text-lg border-black ${
						isPasswordMatch
							? 'border border-green-500'
							: 'border border-red-500'
					}`}
				/>
				{isPasswordMatch ? (
					<button className='btn-shadow' onClick={() => register(inputData)}>
						Register
					</button>
				) : (
					<>
						<p className='text-red-500'>Passwords do not match!</p>
						<button
							disabled
							className='btn-shadow disabled'
							onClick={() => register(inputData)}
						>
							Register
						</button>
					</>
				)}
			</div>
		</Layout>
	)
}

export default Auth
