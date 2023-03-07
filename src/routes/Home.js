import React from "react";
import Navbar from "../components/Navbar";

const Home=()=> {
    return (
        <div>
            <Navbar></Navbar>
            <div className="jumbotron">
  <h1 className="display-4 text-dark">Hi , I am Mirella</h1>
  <p className="lead">I am a Junior web developer </p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
  </div>

    
    </div>
    
 );
}
 export default Home;
