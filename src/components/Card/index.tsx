import { useEffect, useState } from 'react';
import { Button } from '../Button';
import * as S from './styles';

interface Props {
  title: string;
  pledge?: string;
  quantity?: number;
  description: string;
  minAmount?: number;
  selectedCard: string;
  setSelectedCard: React.Dispatch<React.SetStateAction<string>>
}

export default function Card({title, pledge, quantity, description, minAmount, selectedCard, setSelectedCard}: Props) {
	const [shouldRender, setShouldRender] = useState(false);
	
	useEffect(() => {
		if (selectedCard === title) {
			setShouldRender(true);
		} else {
			setShouldRender(false);
		}
	}, [selectedCard, title]);
	return (
		<S.Container disabled={quantity === 0}>
			<S.Wrapper>
				<input name='reward' type={'radio'} id={title} disabled={quantity === 0} onClick={() => setSelectedCard(title)}/>
				<S.Content>
					<S.Header disabled={quantity === 0}>
						<div>
							<label htmlFor={title}>{title}</label>
							<span>{pledge}</span>
						</div>

						{
							quantity !== undefined && quantity >= 0 && (
								<span><strong>{quantity}</strong> left</span>
							)
						}
					</S.Header>
					<p className='description'>{description}</p>
				</S.Content>
			</S.Wrapper>
      
			{
				shouldRender && (
					<S.ActionContainer>
						<S.Actions>
							<span>Enter your pledge</span>

							<div>
								<S.InputContainer>
									<label>$</label>
									<S.Input />
								</S.InputContainer>
								<Button>Continue</Button>
							</div>
						</S.Actions>
					</S.ActionContainer>
				)
			}
		</S.Container>
	);
}