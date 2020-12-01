import React from 'react';
import './App.css';
import { useState } from 'react';
import SignIn from './components/login/login.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { SetThemes } from './context/theme';
import Home from './components/home/Home.component'
function App() {
  const [DarkMode, setDarkMode] = useState(true);
  const [IsLoggedIn, setIsLoggedIn] = useState(true)
  const theme = createMuiTheme({
    palette: {
      type: DarkMode ? 'dark' : 'light',
      
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SetThemes.Provider value={setDarkMode}>
        <div className="App">
          {IsLoggedIn?<Home/>:<SignIn />}
        </div>
      </SetThemes.Provider>
    </ThemeProvider>
  );
}

export default App;
