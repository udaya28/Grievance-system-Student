import React, { useEffect, useState } from 'react';
import './App.css';
import SignIn from './components/login/login.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { setLogin } from './context/context';
import Home from './components/home/Home.component';
function App() {

  let bool;
  if (localStorage.getItem('isLoggedIn') !== null) {
    bool = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  } else {
    bool = false;
  }
  const [IsLoggedIn, setIsLoggedIn] = useState(bool);

  // useEffect(() => {
  //   if (localStorage.getItem('isLoggedIn') !== null) {
  //     let bool = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  //     setIsLoggedIn(bool);
  //   }
  //   return () => {};
  // }, []);

  useEffect(() => {
    let bool = IsLoggedIn ? 'true' : 'false';
    localStorage.setItem('isLoggedIn', bool);
    return () => {};
  }, [IsLoggedIn]);

  const theme = createMuiTheme({
    palette: {
      type: 'light',

      primary: {
        main: '#3a42bb',
      },
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
