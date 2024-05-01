import { ethers } from 'ethers'
import { useState, useEffect } from 'react';

const Navigation = ({ account, setAccount }) => {
    const [isMobile, setIsMobile] = useState(false);
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }
    const checkIsMobile = () => {
        if (window.innerWidth <= 767) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    // Call checkIsMobile when the component mounts
    useEffect(() => {
        checkIsMobile();
        // Event listener for window resize
        window.addEventListener('resize', checkIsMobile);
        // Remove event listener when the component unmounts
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

  
 
    return (
        
        // <nav style={{ position: 'relative' ,  }}>
        //     <button
        //         type="button"
        //         className='nav__connect'
        //         style={{ 
        //             position: 'absolute', 
        //             top: '-3px', 
        //             right: '7px' ,
        //             height:'50px',
        //             marginTop:'3px',
        //             fontSize:'auto',
        //             '@media (max-width: 767px)': {
        //                 top: '100px',
        //                 fontSize: '1.5rem',
        //                 width: '100%',
        //                 display: 'block',
                        
        //                 justifyContent: 'center',
        //                 textAlign: 'center',
        //                 marginTop: '100px',
        //             }

                   
                
                
            
        //     }} // Adjust the top and right values as needed


        <nav style={{ position: 'relative' }}>
            <button
                type="button"
                className='nav__connect'
                style={{
                    position: 'absolute',
                    top: isMobile ? '100px' : '-3px',
                    right: '7px',
                    height: '50px',
                    //marginTop: '3px',
                    padding:'6px',
                    
                    fontSize: isMobile ? '1rem' : 'auto',
                    width: isMobile ? '50%' : 'auto',
                    display: 'block',
                    justifyContent: isMobile ? 'center' : 'initial',
                    textAlign: isMobile ? 'center' : 'center',
                    marginTop: isMobile ? '-70px' : '3px',
                    marginLeft: isMobile ? '80px' : '0',
                    marginRight: isMobile ? '100px' : '0',
                    marginBottom: isMobile ? '20px' : '0'

                }}
                onClick={connectHandler}

            >
                {window.ethereum ? (
                account ? (
                    account.slice(0, 6) + '...' + account.slice(38, 42)
                ) : (
                    'Connect To MetaMask '
                )
                ) : (
                    <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer" style={{color: 'black', fontWeight: 'bold'}}>
                        Connect To MetaMask
                    </a>
                
                
    )}

            </button>
            

            

            <ul className='nav__links' 
            style={{ marginTop:'0px', height:'50px' , fontSize:'2rem', gap:'4.8rem'}} >
                <li><a href="#Clothing & Jewelry">Clothing & Jewelry</a></li>
                <li><a href="#Electronics & Gadgets">Electronics & Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys & Gaming</a></li>
            </ul>



            
            
        </nav>
    );
}

export default Navigation;