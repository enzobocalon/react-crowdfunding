import check from '../../assets/images/icon-check.svg';
import { Button } from '../Button';

interface Props {
  handleClose: () => void;
}

export default function SuccessModal({handleClose}: Props) {
	return (
		<>
			<img src={check} />
			<h1>Thanks for your support!</h1>
			<p className='description'>
      Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.
			</p>
			<Button onClick={handleClose}>Got it!</Button>
		</>
	);
}