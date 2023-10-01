import { FC } from 'react'

import Spi from './Spinner.svg'

const Loader: FC = () => {
	return <img src={Spi.src} width={100} height={100} />
}

export default Loader
