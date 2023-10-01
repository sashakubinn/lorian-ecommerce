import { FC } from 'react'

import Row from '@/ui/grid/Row'

import styles from './Header.module.scss'
import HeaderButtons from './buttons/HeaderButtons'
import Cart from './cart/Cart'
import HeaderLogo from './logo/HeaderLogo'
import Menu from './menu/HeaderMenu'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from './profile/HeaderProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Row>
				<HeaderLogo />
				<HeaderMenu />
				<HeaderButtons />
				<HeaderProfile />
			</Row>
		</header>
	)
}

export default Header
