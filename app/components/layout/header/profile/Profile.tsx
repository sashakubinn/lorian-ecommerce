import cn from 'clsx'
import React, { FC, PropsWithChildren, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiEdit } from 'react-icons/fi'
import { IoMdExit } from 'react-icons/io'
import { MdSettings } from 'react-icons/md'

import SquareButton from '@/ui/square-button/SquareButton'

import { useOutside } from '@/hooks/useOutside'

import ProfileItem from './ProfileItem.tsx/ProfileItem'

interface IProfile {
	expanded?: boolean
	onToggleExpanded: () => void
}

const Profile: FC<PropsWithChildren<IProfile>> = ({
	expanded,
	onToggleExpanded
}) => {
	return (
		<div className='relative'>
			<SquareButton
				Icon={AiOutlineUser}
				onClick={onToggleExpanded}
				className='mr-5'
			/>
			<div
				className={cn(
					'absolute top-12 w-[15.6rem] -left-[3rem] bg-[#131313] p-5 rounded-lg text-sm menu z-10',
					{
						'open-menu': expanded,
						'close-menu': !expanded
					}
				)}
			>
				<ProfileItem name='My Profile' icon={CgProfile} />
				<ProfileItem name='Edit Profile' icon={FiEdit} />
				<ProfileItem name='Settings' icon={MdSettings} />
				<ProfileItem name='Exit' icon={IoMdExit} />
			</div>
		</div>
	)
}
export default Profile
