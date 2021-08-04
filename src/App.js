import './App.css';
import Index from './components/Index';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009bb4',
      dark: '#007a8c'
    },
    secondary: {
      main: '#007a8c'
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
