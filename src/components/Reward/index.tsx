import { useCallback, useState } from 'react';
import { Button } from '../Button';
import CardGroup from '../CardGroup';
import Modal from '../Modal';
import * as S from './styles';

interface Props {
  title: string;
  value: string;
  quantity: number;
  description: string;
}

export default function Reward({title, value, description, quantity}: Props) {
	const [openModal, setOpenModal] = useState(false);

	const handleClose = useCallback(() => {
		setOpenModal(false);
	}, []);
	return (
		<>
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

					<Button disabled={quantity === 0} onClick={() => setOpenModal(prev => !prev)}>
						{quantity === 0 ? 'Out of Stock' : 'Select Reward'}
					</Button>
				</S.FooterContainer>
			</S.Container>
		
			{
				openModal && (
					<Modal handleClose={handleClose}>
						<CardGroup 
							handleClose={handleClose} />
					</Modal>
				)
			}
		</>
	);
}