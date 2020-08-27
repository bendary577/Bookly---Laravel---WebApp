import React from 'react';
import DefaultNavbar from './DefaultNavBar';
import Jumborton from '../components/Jumbotron'
import Login from '../Screens/Login';
import Footer from './Footer';



const Header = () => {
    return (    
        <div className="headerDiv">  
             <Jumborton />
             <DefaultNavbar />
             <Login/ >
             <Footer/>
        </div>
    ) 
}

export default Header;