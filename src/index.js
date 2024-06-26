import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'; // Is line ko add kiya hai
import './index.css';


import {ThemeProvider} from "styled-components";

import Home from './Home';
import { About } from './About';
import { Contact } from './Contact';
import Products from "./Products";


import MetamaskButton from './components/MetamaskButton';
import { GlobalStyle } from './GlobalStyle';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

const RootComponent = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
  
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true when user logs in
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
      
       <Router>
       <GlobalStyle />
       
        <Routes>
          
          {!isLoggedIn && <Route path="/" element={<MetamaskButton onLogin={handleLogin} />} />}
          
         
          {!isLoggedIn && <Route path="/home" element={<Home />} />}
          {!isLoggedIn && <Route path="/about" element={<About />} />}
          {!isLoggedIn && <Route path="/products" element={<Products />} />}
          {!isLoggedIn && <Route path="/contact" element={<Contact />} />}
         
          {isLoggedIn && (

            

            <>
           
            
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
            
          
            </>
          )}
        </Routes>
       
      </Router>
      </ThemeProvider>
      
    </React.StrictMode>
  );
};

root.render(<RootComponent />);

reportWebVitals();
