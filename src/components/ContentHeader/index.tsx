import { Container } from '../Container';
import * as S from './styles';
import logoMasterCraft from '../../assets/images/logo-mastercraft.svg';
import iconBookmark from '../../assets/images/icon-bookmark.svg';
import { Button } from '../Button';

export default function ContentHeader() {
	return (
		<Container>
			<img className="center-out" src={logoMasterCraft} />
			<h1>Mastercraft Bamboo Monitor Riser</h1>
			<p className='description'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
			<S.ActionContainer>
				<Button>
          Back this project
				</Button>
				<S.BookMarkContainer>
					<S.BookmarkIcon>
						<img src={iconBookmark} />
					</S.BookmarkIcon>
					<strong>Bookmark</strong>
				</S.BookMarkContainer>
			</S.ActionContainer>
		</Container>
	);
}