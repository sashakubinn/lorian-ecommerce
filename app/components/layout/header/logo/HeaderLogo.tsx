import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Column from '@/ui/grid/Column'

import Logo from '../../../../../public/images/logo-removebg-preview.png'

const HeaderLogo = () => {
	return (
		<Column size={2}>
			<Link href='/' className='flex items-center'>
				<Image
					src={Logo}
					width={75}
					height={75}
					className='rounded-xl mr-4'
					alt='Lorian shop'
				/>
				<span>
					<span className='text-white mb-4 block font-extralight tracking-[0.2em]'>
						LORIAN
					</span>
					<span className='text-sm text-dark-gray tracking-[0.3em] block font-thin  '>
						STORE
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
