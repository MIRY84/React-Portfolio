import React from 'react'

function Contact(props) {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <h1>Contact Page</h1>
        <p>
         Please contact me for collaboration or future work.

        </p>
      </div>
      <div className="col-12 text-center">
        <a href="https://github.com/MIRY84" role="button" className="btn btn-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mirella-dimichino-823600254/" role="button" className="btn btn-link">
          LinkedIn
        </a>
        <a href="mirella.dimichino@gmail.com" role="button" className="btn btn-link">
          mirella.dimichino@gmail.com
        </a>
        <a href="btn btn-link" role="button" className='btn btn-link'>
          Phone: +4407469923574
        </a>
      </div>
    </div>
  );
}

export default Contact;

