import React, { useState } from 'react';
import './App.css';
import SignIn from './components/login/login.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { SetThemes ,setLogin } from './context/context';
import Home from './components/home/Home.component';
function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const [IsLoggedIn, setIsLoggedIn] = useState(true);
  const theme = createMuiTheme({
    palette: {
      type: DarkMode ? 'dark' : 'light',
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <SetThemes.Provider value={setDarkMode}>
        <setLogin.Provider value={setIsLoggedIn}>
        <div className="App">{IsLoggedIn ? <Home /> : <SignIn />}</div>
        </setLogin.Provider>
      </SetThemes.Provider>
    </ThemeProvider>
  );
}

export default App;
