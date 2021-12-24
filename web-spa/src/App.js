import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/weatherforecast`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWeather(result);
          console.log("RISULTATO API", result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return <LoginPage />
}

export default App;
