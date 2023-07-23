import React from 'react'
import { FaLinkedin, FaGithub, FaPhone,  } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaFilePdf } from 'react-icons/fa';


function Contact(props) {
  return (
    <>
   
    <div className="row">
      <div className="col-12 text-center">
        <h1>Contact Page</h1>
        <h3 className="prompt text-center m-auto">
         Please contact me for collaboration or future work.<br></br> Here is my cv in pdf attached
         
         <a href="https://docs.google.com/document/d/1vQA-AqsYupxodKe1P_cX78ub14Fs5wIAOGhH8exQxBE/edit" role="button" className="icon">
                  <FaFilePdf />
                </a>
                </h3>
               

        
      </div>
      
      <div >
        <h3 className="prompt text-center m-auto">Please have a look at my 
        <a href="https://github.com/MIRY84" >
         <FaGithub />
        </a>
        </h3>
        </div>
        <div >
          <h3 className="prompt text-center m-auto">Please follow me on 
        <a href="https://www.linkedin.com/in/mirella-dimichino-823600254/">
                <FaLinkedin />
        </a>
        </h3>
        </div>
       
        
        <h3 className="prompt text-center m-auto">Contact me at 
        <AiTwotoneMail />
          mirella.dimichino@gmail.com
          
         
         <br></br>
        or
        <FaPhone />
          Phone: +4407469923574
        
          </h3>
          </div>
          
        
    
      
     </>
    
  );
}

export default Contact;

