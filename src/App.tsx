import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/global';
import defaultTheme from './assets/styles/theme/defaulTheme';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Header />
			<MainContent />
		</ThemeProvider>
	);
}

export default App;
