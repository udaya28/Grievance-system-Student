import React, { useEffect, useState } from 'react';
import './App.css';
import cookie from 'js-cookie';
import SignIn from './components/login/login.component';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { setLogin } from './context/context';
import Home from './components/home/Home.component';
import Axios from 'axios';
import { BoxLoading } from 'react-loadingg';
// Axios.defaults.withCredentials = true;
function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    (async () => {
      // console.log(cookie.get('token'));
      if (cookie.get('token')) {
        const res = await Axios.get('https://grievance-app-backend.herokuapp.com/auth', {
          headers: {
            token : cookie.get('token')
          },
        });
        if (res.status === 200) {
          
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } else {
        //logout
        setIsLoggedIn(false);
      }
    })();
  }, []);

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
        {/* <BoxLoading color="#3a42bb" size="large" /> */}
      </setLogin.Provider>
    </ThemeProvider>
  );
}

export default App;
