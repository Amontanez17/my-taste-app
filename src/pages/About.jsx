import React from "react";
import "./About.css";
import "../App.css";

function About() {
  const photoUrl = "../70s chic profile.jpg";
  const linkedinUrl = "https://www.linkedin.com/in/angela-montanez/";
  const githubUrl = "https://github.com/Amontanez17";

  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="bio">
        <div className="profile-image">
          <img src={photoUrl} alt="Your Name" />
        </div>
        <p>
          Hi, I'm Angela. This is my first project using React JS as a student
          at Ironhack. I am stoked to share it with you! Feel free to connect
          with me on LinkedIn or check out my projects on GitHub.
        </p>
      </div>
      <div className="links">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
