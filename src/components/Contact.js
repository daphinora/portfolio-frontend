import React from 'react';
import '../index.css';

const Contact = () => {
    return (
        <div id="contact" >
            <h2>Contact Jack Mitchell</h2>
            {/* replace these with logos? food for thought. might look more professional */}
            {/* <p>Phone Number:</p>
                <a href="tel:5127880140">512-788-0140</a> */}
            <p>Email:</p>
            <a href="mailto:jack.danielle.mitchell@gmail.com">jack.danielle.mitchell@gmail.com</a>
            <p>LinkedIn:</p>
            <a href="http://www.linkedin.com/in/jack-danielle-mitchell">linkedin.com/in/jack-danielle-mitchell</a>
            <p>GitHub:</p>
            <a href="http://www.github.com/daphinora">github.com/daphinora</a>
            <br />
            <a href="home">Back to Top</a>
            <br />
            <br />
        </div>
    );
}

export default Contact;
