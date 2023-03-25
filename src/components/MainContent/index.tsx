import ContentHeader from '../ContentHeader';
import ProgressGroup from '../ProgressGroup';
import * as S from './styles';

export default function MainContent() {
	return (
		<S.Container>
			<ContentHeader />
			<ProgressGroup />
		</S.Container>
	);
}