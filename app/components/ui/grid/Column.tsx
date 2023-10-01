import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IColumn {
	size: number
	isCenter?: boolean
	className?: string
	isPadding?: boolean
}

const Column: FC<PropsWithChildren<IColumn>> = ({
	size,
	children,
	isCenter = true,
	className,
	isPadding = true
}) => {
	return (
		<div
			style={{
				gridColumn: ` span ${size} / span ${size} `
			}}
			className={cn(
				'h-full flex items-center border-black border-r-2 border-solid',
				{
					'justify-center': isCenter,
					'p-5': isPadding
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export default Column
