// TODO: this file is to remove. It's still here b/c of the code used in fetch. When you have successfully
// managed to make API requests to other BE controllers, delete this.

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './App.css';
import CustomerRegistration from './pages/CustomerRegistration';

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

  return (
    <Routes>
      <Route path="/customer-registration" element={<CustomerRegistration />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("root")
);

export default App;
