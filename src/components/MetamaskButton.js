import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

function MetamaskButton() {
  const navigate = useNavigate(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    if (isUserLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const web3_metamask_login = async () => {
    // Check if MetaMask is installed
    if (isMobile()) {
      // For mobile devices, attempt to open the MetaMask app
      window.location.href = 'https://metamask.app.link/dapp/yourwebsite.com';
    } else if (!window.ethereum) {
      console.error('MetaMask extension not detected. Please install MetaMask.');
      window.open('https://metamask.io/download.html', '_blank');
      alert('MetaMask extension not detected. Please install MetaMask.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('MetaMask login successful:', accounts);
      
      const userAddress = accounts[0];
      alert('MetaMask login successful. User address: ' + userAddress);
      
      localStorage.setItem('isUserLoggedIn', 'true');

      navigate('/home');
    } catch (error) {
      console.error('Error logging in with MetaMask:', error);
      alert('Error logging in with MetaMask. Please try again.');
    }
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const styles = {
      container: {
      textAlign: 'center',
      color: 'white',
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#2F4F4F',
      justifyContent: 'center',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '5px',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    image: {
      maxWidth: '50%',
      height: 'auto',
      border: '5px solid #2F4F4F',
      borderRadius: '10px',
      margin: '5px',
    },
    outer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      backgroundColor: '#D3D3D3',
      textAlign: 'center',
      
    },
    h2: { 
      textAlign: 'center',
      fontStyle: 'italic',
      marginTop: '-29px',
    },
    loginHeading: {
      marginTop: '0px',
      fontWeight: 'bold',
      color: '#F5F5F5',
      marginBottom: '10px',
    },
    paragraph: {
      marginTop: '15px',
      fontSize: '18px',
      color: '#fff',
      marginBottom: '20px',
    },
  
    
  };

  return (
    <div style={styles.outer}>
      <h2 style={styles.h2}>Welcome To SajidE-store</h2>
      <div style={styles.container}>
        <h2 style={styles.loginHeading}>Login</h2>
        <p style={styles.paragraph}>Click the button below to login with MetaMask.</p>
        <br/>
        <button style={styles.button} onClick={web3_metamask_login}>Login with MetaMask</button>
        <br/>
        <br/>
        <div style={styles.imageContainer}>
          <img
            src="https://coingeek.com/wp-content/uploads/2022/07/how-can-blockchain-innovate-the-e-commerce-industry-min.jpg"
            alt="Background"
            style={styles.image}
          />
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*9h9JqCffS-93gUtc8S-vlg.png"
            alt="Background"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

export default MetamaskButton;
