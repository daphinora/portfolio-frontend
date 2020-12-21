import React from 'react';
import '../index.css';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App" style={{ "fontSize": "22px" }}>
      <br/>
      <br/>
      <div id="home">
        {/* <h1 className="Head-Line">Hi, I'm Jack Mitchell!</h1> */}
      </div>

      <About />

      <Contact />

    </div>
  );
}

export default App;
