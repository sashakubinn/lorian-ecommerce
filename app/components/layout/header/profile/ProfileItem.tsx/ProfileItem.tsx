import { FC, PropsWithChildren } from 'react'
import { IconType } from 'react-icons'
import { CgProfile } from 'react-icons/cg'

import SquareButton from '@/ui/square-button/SquareButton'

interface IProfileItem {
	icon: IconType
	name: string
}

const ProfileItem: FC<PropsWithChildren<IProfileItem>> = ({ icon, name }) => {
	return (
		<div className='flex ml-2 mt-3 mb-3 hover:text-white cursor-pointer'>
			<SquareButton
				Icon={icon}
				height={true}
				width={true}
				onClick={() => {}}
				className='rounded-lg'
			/>
			<div className='ml-4 mt-1 '>{name}</div>
		</div>
	)
}

export default ProfileItem
