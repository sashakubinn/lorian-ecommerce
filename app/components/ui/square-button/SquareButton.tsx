import cn from 'clsx'
import { FC } from 'react'
import { IconType } from 'react-icons'

import Column from '../grid/Column'

interface ISquareButton {
	Icon: IconType
	onClick: () => void
	number?: number
	className?: string
	height?: boolean
	width?: boolean
}

const SquareButton: FC<ISquareButton> = ({
	Icon,
	onClick,
	number,
	className,
	height = false,
	width = false
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				'h-10 w-10 bg-black flex items-center justify-center hover:bg-[#111] transition-colors duration-300 relative',
				{
					'h-8': height,
					'w-8': width
				},
				className
			)}
		>
			{number && (
				<span className=' flex h-5 w-5 items-center justify-center rounded-full bg-primary p-0.5 text-xs text-white absolute -top-1 -right-2'>
					{number}
				</span>
			)}
			<Icon color='#7d7d7d' size={21} />
		</button>
	)
}

export default SquareButton
