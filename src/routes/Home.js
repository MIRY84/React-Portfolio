import React from "react";
import Navbar from "../components/Navbar";
import { FaFacebook } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {AiFillHtml5} from 'react-icons/ai';
import "../routes/styles/Footer.css";
import Myprofile from "../routes/images/my-profile-picture.jfif";
import { FaFilePdf } from "react-icons/fa";

const Home=()=> {
    return (
        <div>
            <Navbar />
            <div className="home">
              <div className="about text-center">
                <h2> Hi I am Mirellla a web developer with a passion for best performsnces </h2>
              <div className="prompt text-center">
                <p> Web developer with a degree in Administration
            voluptatibus maiores alias consequatur aut perferendis
        doloribus asperiores repellat.</p>
        <img src={Myprofile}></img>

        <img src={FaFilePdf}></img>
        
      
    

  </div>
</div>
</div>

 <div className="skills text-center">
  <h1>Skills</h1>
  <ol className="list">
    <li className="item">
      <h2>FrontEnd</h2>
    <span>
      React, Html, css, Bootstrap, Jquery, Javascript
      <AiFillHtml5 />
      <AiTwotoneMail />
       
        <FaTwitter />
        <FaFacebook />
    </span>
    </li>
  </ol>
 </div>
 </div>

    
 );
}
 export default Home;
