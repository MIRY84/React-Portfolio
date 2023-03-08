import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import "../routes/styles/Footer.css";



const Footer = () => {
  return (
    <div className= "footer">
     <div>
     <AiTwotoneMail />
       
        <FaTwitter />
        <FaFacebook />
     </div>
     <p> &copy; 2023 mirella.com</p>
     </div>
  );
}

export default Footer;
