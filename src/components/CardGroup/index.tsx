import * as S from './styles';
import closeMenu from '../../assets/images/icon-close-modal.svg';
import Card from '../Card';

interface Props {
	handleClose: () => void;
}

export default function CardGroup({handleClose}: Props) {
	return (
		<S.Container>
			<S.Header>
				<h1>Back this project</h1>
				<img src={closeMenu} onClick={handleClose}/>
			</S.Header>
			<p className='description'>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
			</p>

			<Card 
				title={'Pledge with no reward'}
				description={`Choose to support us without a reward if you simply believe in our project. As a backer, 
			you will be signed up to receive product updates via email.`}/>
			<Card 
				title={'Bamboo Stand'}
				pledge={'Pledge $25 or more'}
				quantity={101}
				description={`You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
				you’ll be added to a special Backer member list.`}/>
			<Card 
				title={'Black Edition Stand'}
				pledge={'Pledge $75 or more'}
				quantity={64}
				description={`You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
				member list. Shipping is included.`}/>
			<Card 
				title={'Mahogany Special Edition'}
				pledge={'Pledge $200 or more'}
				quantity={0}
				description={`You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
				to our Backer member list. Shipping is included.`}/>
		</S.Container>
	);
}