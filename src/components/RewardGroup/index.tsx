import { Container } from '../Container';
import Modal from '../Modal';
import Reward from '../Reward';
import * as S from './styles';

export default function RewardGroup() {
	return (
		<Container>
			<S.Wrapper>
				<h1>About this project</h1>
				<p className='description'>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
				</p>
				<p className='description'>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.
				</p>

				<Reward 
					title='Bamboo Stand'
					value='Pledge $25 or more'
					quantity={101}
					description={`You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
					you’ll be added to a special Backer member list.`}/>
				<Reward 
					title='Black Edition Stand'
					value='Pledge $75 or more'
					quantity={64}
					description={`You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
					member list. Shipping is included.`}/>
				<Reward
					title='Mahogany Special Edition'
					value='Pledge $200 or more'
					quantity={0} 
					description={`You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
					to our Backer member list. Shipping is included.`}/>
			</S.Wrapper>
		</Container>
	);
}