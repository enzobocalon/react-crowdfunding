import { Button } from '../Button';
import * as S from './styles';

interface Props {
  title: string;
  value: string;
  quantity: number;
  description: string;
}

export default function Reward({title, value, description, quantity}: Props) {
	return (
		<S.Container disabled={quantity === 0}>
			<S.HeaderContainer>
				<h1>{title}</h1>
				<span className='value-field'>{value}</span>
			</S.HeaderContainer>

			<p className='description'>
				{description}
			</p>

			<S.FooterContainer>
				<div>
					<h2>{quantity}</h2>
					<span>left</span>
				</div>

				<Button disabled={quantity === 0}>
					{quantity === 0 ? 'Out of Stock' : 'Select Reward'}
				</Button>
			</S.FooterContainer>
		</S.Container>
	);
}