import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home/Home.component';
import SignIn from './components/login/login.component';
import cookie from 'js-cookie';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { setLogin, setLoader } from './context/context';
import Axios from 'axios';
import { BoxLoading } from 'react-loadingg';
// Axios.defaults.withCredentials = true;
function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState();
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    (async () => {
      // console.log(cookie.get('token'));
      if (cookie.get('token')) {
        setShowLoader(true);
        const res = await Axios.get(
          'https://grievance-app-backend.herokuapp.com/auth',
          {
            headers: {
              token: cookie.get('token'),
            },
          }
        );
        setShowLoader(false);
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

  // useEffect(() => {
  //   let bool = IsLoggedIn ? 'true' : 'false';
  //   localStorage.setItem('isLoggedIn', bool);
  //   return () => {};
  // }, [IsLoggedIn]);

  const theme = createMuiTheme({
    palette: {
      type: 'light',

      primary: {
        main: '#3a42bb',
      },
    },
  });
  // filter: blur(8px);
  // -webkit-filter: blur(8px);
  return (
    <ThemeProvider theme={theme}>
      <setLogin.Provider value={setIsLoggedIn}>
        <setLoader.Provider value={setShowLoader}>
          <div className="App">
            {IsLoggedIn ? <Home /> : <SignIn />}
            {showLoader && <BoxLoading color="#3a42bb" size="large" />}
          </div>
        </setLoader.Provider>
      </setLogin.Provider>
    </ThemeProvider>
  );
}

export default App;
