import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App" style={{"fontSize": "22px"}}>
      <div id="home">
        <h1 className="Head-Line">Hi, I'm Jack Mitchell!</h1>
      </div>

      <div id="about" className="Head-Line">
        {/* <h2>Who am I?</h2> */}
        <p>I'm an aspiring Full Stack Software Developer located in Austin, Texas.</p>
        <p>Learning is my passion, and I'm excited to be in an industry full of learning opportunities!</p>
      </div>

      <div id="contact" className="Head-Line">
        <h2>Contact Jack Mitchell</h2>
        <p>Phone Number:</p>
        <a href="tel:5127880140">512-788-0140</a>
        <p>Email:</p>
        <a href="mailto:jack.danielle.mitchell@gmail.com">jack.danielle.mitchell@gmail.com</a>
        <p>LinkedIn:</p>
        <a href="http://www.linkedin.com/in/jack-danielle-mitchell">linkedin.com/in/jack-danielle-mitchell</a>
        <p>GitHub:</p>
        <a href="http://www.github.com/daphinora">github.com/daphinora</a>
      </div>
      <br/>
      <a href="home">Back to Top</a>
    </div>
  );
}

export default App;
