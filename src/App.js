import React, { useState } from 'react';
import './App.css';
import SignIn from './components/login/login.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { setLogin } from './context/context';
import Home from './components/home/Home.component';
function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type:  'light',

      primary:{
        main: "#3a42bb",
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <setLogin.Provider value={setIsLoggedIn}>
          <div className="App">{IsLoggedIn ? <Home /> : <SignIn />}</div>
        </setLogin.Provider>
    </ThemeProvider>
  );
}

export default App;
