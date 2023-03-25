import * as S from './styles';

interface Props {
  title: string;
  pledge?: string;
  quantity?: number;
  description: string;
}

export default function Card({title, pledge, quantity, description}: Props) {
	return (
		<S.Container disabled={quantity === 0}>
			<input name='reward' type={'radio'} id={title} disabled={quantity === 0}/>
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
		</S.Container>
	);
}