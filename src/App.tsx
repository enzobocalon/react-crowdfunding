import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/global';
import defaultTheme from './assets/styles/theme/defaulTheme';
import Header from './components/Header';

function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Header />
		</ThemeProvider>
	);
}

export default App;
