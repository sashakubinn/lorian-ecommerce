import cn from 'clsx'
import { CSSProperties, FC, PropsWithChildren } from 'react'

interface IRow {
	className?: string
	isBordered?: boolean
	style?: CSSProperties
}

const Row: FC<PropsWithChildren<IRow>> = ({
	children,
	className,
	isBordered = true,
	style = {}
}) => {
	return (
		<div
			className={cn(
				'grid w-full grid-cols-12 border-black',
				{
					'border-b-2 border-solid': isBordered
				},
				className
			)}
			style={style}
		>
			{children}
		</div>
	)
}

export default Row
