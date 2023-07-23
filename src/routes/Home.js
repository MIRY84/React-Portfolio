import React from "react";
import Header from "../components/Header";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { AiFillHtml5 } from 'react-icons/ai';
import "../routes/styles/Footer.css";
import Myprofile from "../components/images/my-profile-picture.jfif";
import { FaFilePdf } from "react-icons/fa";
import "./styles/Home.css";
import { FaLinkedin } from "react-icons/fa";
import { FaHtml5, FaReact, FaCss3, FaJs, FaBootstrap, FaGit, FaGithub } from "react-icons/fa";





const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="about text-center">
          <h2> Hi I am Mirella Dimichino,</h2>
          <h3>a web developer with a passion for best performances </h3>
          <div className="prompt text-center">
            <p> Passionate Web developer with a background in Hospitality</p>
            <img src={Myprofile}></img>
          </div>
        </div>
      </div>

      <div className="skills text-center">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>FrontEnd</h2>

            <div className="icons">
              <FaReact /> <FaCss3 />
              <FaJs />
              <FaHtml5 /> <FaBootstrap /> <FaGit /> <FaGithub />









            </div>

          </li>
        </ol>
      </div>
    </div>


  );
}
export default Home;
