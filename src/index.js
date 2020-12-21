import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Nav, Navbar } from 'react-bootstrap';

ReactDOM.render(
  <div className="Index">
    <React.StrictMode>
      <Navbar className="Navbar">
        <Nav>
          <Nav.Link href="#home" className="Name">JACK MITCHELL</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link> |
          <Nav.Link href="#contact">Contact</Nav.Link> |
          <Nav.Link href="#blog">Blog</Nav.Link> |
          <Nav.Link href="#projects" style={{ paddingRight: "0px" }}>Projects</Nav.Link>
        </Nav>
      </Navbar>
      <App />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
