import './App.css';
import Index from './components/Index';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#86113e',
      dark: '#5e0e26'
    },
    secondary: {
      main: '#5e0e26'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Index/>
      </div>
    </ThemeProvider>
  );
}

export default App;
