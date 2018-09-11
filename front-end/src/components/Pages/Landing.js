import React from "react";
import '../../styles/LandingRef.css'

const Landing = () => {
  return (
    <div className="container">
      <div className="background-holder">
        <div className="nav-bar">
          <button>Sign up</button>
          <button>Sign in</button>
        </div>
        <span className="welcome-text">Welcome</span>
      </div>
      <div className="schedule-button">
        <button className="button-button">Schedule Now
    </button>
      </div>
      <div className="footer">
        <footer>
          <span>Copyright 2018</span>
        </footer>
      </div>

    </div>
  );
};

export default Landing;
