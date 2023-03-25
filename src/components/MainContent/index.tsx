import ContentHeader from '../ContentHeader';
import ProgressGroup from '../ProgressGroup';
import RewardGroup from '../RewardGroup';
import * as S from './styles';

export default function MainContent() {
	return (
		<S.Container>
			<ContentHeader />
			<ProgressGroup />
			<RewardGroup />
		</S.Container>
	);
}