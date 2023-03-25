import { useState } from 'react';
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
	setSuccessModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Card({title, pledge, quantity, description, minAmount, selectedCard, setSelectedCard, setSuccessModal}: Props) {
	const [error, setError] = useState('');
	const [values, setValues] = useState('');
	const [canProceed, setCanProceed] = useState(false);

	function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;
		if (!value) {
			setValues(value);
			setCanProceed(false);
			setError('Value cannot be $0 or empty!');
			return;
		}

		setValues(value);
	
		if (minAmount) {
			if (parseFloat(value) < minAmount) {
				setError(`Value cannot be less than $${minAmount}`);
				setCanProceed(false);
				return;
			}
		}

		setCanProceed(true);
		setError('');
	}

	function handleSubmit() {
		setSuccessModal(true);
	}
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
				selectedCard === title && (
					<S.ActionContainer>
						<S.Actions>
							<span>Enter your pledge</span>

							<div>
								<S.InputContainer>
									<label>$</label>
									<S.Input type={'number'} min={minAmount} value={values} onChange={handleAmountChange}/>
								</S.InputContainer>
								<Button disabled={!canProceed} onClick={handleSubmit}>Continue</Button>
							</div>
						</S.Actions>
						{
							error && (
								<S.Error>
									<p>{error}</p>
								</S.Error>
							)
						}
					</S.ActionContainer>
				)
			}
		</S.Container>
	);
}