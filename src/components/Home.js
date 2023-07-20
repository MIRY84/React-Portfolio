import React from "react";

import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { AiFillHtml5 } from 'react-icons/ai';
import "../routes/styles/Footer.css";
import Myprofile from "../components/images/my-profile-picture.jfif";
import { FaFilePdf } from "react-icons/fa";



const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="about text-center">
          <h2> Hi I am Mirella Dimichino,</h2> 
          <h3>FrontEndweb developer with a passion for best performances </h3>
          <div className="prompt text-center">
            <p> Passionate Web developer with a background in hospitality</p>
            <img src={Myprofile}></img>






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
              <div className="icons">
              <AiFillHtml5 />
              <AiTwotoneMail />

              <a href="https://docs.google.com/document/d/1vQA-AqsYupxodKe1P_cX78ub14Fs5wIAOGhH8exQxBE/edit" role="button" className="icon">
                <FaFilePdf />
              </a>
              <FaTwitter />
              <FaFacebook />
              </div>
            </span>
          </li>
        </ol>
      </div>
    </div>


  );
}
export default Home;
