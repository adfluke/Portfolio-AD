/* eslint-disable jsx-a11y/alt-text */
import "./aboutmore.css";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Hello, I'm Mr. Adun Phiongam. Nickname: Fluke, you can call me AD :)
        </p>
        <p className="a-desc">
        Born on December 5, 2000, 22 years old,was born in Ubon Ratchathani Province, but lives in Bangkok
        Studying a bachelor's degree at King Mongkut's University of Technology North Bangkok 3rd years
        </p>
      </div>
    </div>
  );
};

export default About;
