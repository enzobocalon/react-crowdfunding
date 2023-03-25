import { Container } from '../Container';
import * as S from './styles';

export default function ProgressGroup() {
	return (
		<Container>
			<S.ItemGroup>
				<S.Item>
					<h1>
          $89,914
					</h1>
					<span>
          of $100,000 backed
					</span>
				</S.Item>
				<S.Item>
					<h1>
          5,007
					</h1>
					<span>
          total backers
					</span>
				</S.Item>
				<S.Item>
					<h1>
          56
					</h1>
					<span>
          days left
					</span>
				</S.Item>
			</S.ItemGroup>

			<S.ProgressBarContainer>
				<S.ProgressBar />
			</S.ProgressBarContainer>
		</Container>
	);
}