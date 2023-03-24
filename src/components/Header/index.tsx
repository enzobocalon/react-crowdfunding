import * as S from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
	return (
		<S.Container>
			<S.Wrapper>
				<S.NavBar>
					<img src={logo} />
					<S.Menu>
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