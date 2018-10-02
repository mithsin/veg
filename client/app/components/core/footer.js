import React from 'react';

const Footer = () => (
  <footer>
    <div className="col-4 float-left">
      <div className="col-12 footer_p">
        <h2>ADDRESS:</h2>
        <p>
          3780 Old Norcross Rd,<br/>
          Suite 106<br/>
          Duluth, GA, 30096
        </p>
      </div>
      <div className="col-12 footer_p">
        <h2>PHONE:</h2>
        <p> (770)495-8828 </p>
      </div>
      <p className="footer__copyright">© 2016 by VeGreen. Vegetarian Fusion Restaurant</p>
    </div>
    <div className="col-4 float-left">.</div>
    <div className="col-4 float-left">
      <div className="col-12 footer_p">
        <h2>HOURS:</h2>
        <ul>
          <li>Mon: 11AM to 9PM</li>
          <li>Tue: 11AM to 9PM</li>
          <li>Wed: Temporary Closed</li>
          <li>Thur: 11AM to 9PM</li>
          <li>Fri: 11AM to 10PM</li>
          <li>Sat: 11AM to 10PM</li>
          <li>Sun: 11AM to 9PM</li>
        </ul>
      </div>
      <div className="col-12 footer_p">
        <img className="col-3" alt="fb" src="fb.jpg" />
        <img className="col-3" alt="in" src="in.jpg" />
        <img className="col-3" alt="gplus" src="gplus.jpg" />
        <img className="col-3" alt="tweet" src="tweet.jpg" />
      </div>
    </div>
  </footer>
);

export default Footer;