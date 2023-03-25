import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '../Container';

import * as S from './styles';

interface Props {
  children: ReactNode;
	handleClose: () => void;
}

export default function Modal({children, handleClose}: Props) {
	let container = document.getElementById('modal');

	if (!container) {
		container = document.createElement('div');
		container.setAttribute('id', 'modal');
		document.body.appendChild(container);
	}

	return (
		createPortal((
			<S.Overlay onClick={handleClose}>
				<Container onClick={(e) => e.stopPropagation()}>
					{children}
				</Container>
			</S.Overlay>
		), container)
	);
}