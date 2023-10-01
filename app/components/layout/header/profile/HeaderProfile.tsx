import Link from 'next/link'
import { FC, PropsWithChildren, useState } from 'react'

import Column from '@/ui/grid/Column'

import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { formatToCurrency } from '@/utils/format-to-currency'

import Profile from './Profile'

const HeaderProfile: FC<PropsWithChildren<{ price?: number }>> = () => {
	const { isLoggedIn } = useAuth()
	const { isShow, setIsShow, ref } = useOutside(false)
	const { total } = useCart()
	const [expanded, setExpanded] = useState(false)

	const toggleExpanded = () => {
		setExpanded(prevExpanded => !prevExpanded)
		setIsShow(false)
	}

	return (
		<Column size={2}>
			{isLoggedIn ? (
				<div className='flex absolute justify-center items-center'>
					<div className='flex'>
						<Profile expanded={expanded} onToggleExpanded={toggleExpanded} />
						<div
							ref={ref}
							className='cursor-pointer'
							onClick={() => {
								setExpanded(!expanded)
							}}
						>
							<div className='text-white text-sm '>Alexander Lyashenk</div>
						</div>
						<div className='text-[1rem] absolute top-14 left-16 tracking-wide'>
							{formatToCurrency(total)}
						</div>
						<button
							className='btn-link absolute
						'
						>
							LogOut
						</button>
					</div>
				</div>
			) : (
				<>
					<Link className='btn-link hover:scale-105 mr-4' href='/auth'>
						Register
					</Link>
					<span> | </span>
					<Link className='btn-link hover:scale-105 ml-4' href='/login'>
						Login
					</Link>
				</>
			)}
		</Column>
	)
}

export default HeaderProfile
