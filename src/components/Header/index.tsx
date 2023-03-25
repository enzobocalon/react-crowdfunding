import * as S from './styles';
import logo from '../../assets/images/logo.svg';
import openHamburguer from '../../assets/images/icon-hamburger.svg';
import closeHamburger from '../../assets/images/icon-close-menu.svg';
import { useState } from 'react';

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<S.Container>
			<S.Wrapper>
				<S.NavBar>
					<img src={logo} />
					<img src = {openMenu ? closeHamburger : openHamburguer} id='menuMobile' onClick={() => setOpenMenu(prev => !prev)}/>
					<S.Menu open={openMenu}>
						<S.MenuItem>
              About
						</S.MenuItem>
						<S.MenuItem>
              Discover
						</S.MenuItem>
						<S.MenuItem>
              Get Started
						</S.MenuItem>
					</S.Menu>
				</S.NavBar>
			</S.Wrapper>
		</S.Container>
	);
}