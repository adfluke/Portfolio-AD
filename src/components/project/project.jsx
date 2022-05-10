/* eslint-disable jsx-a11y/anchor-is-valid */
import "./project.css";

const Project = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Related experienceand projects</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">LOAN PROJECT</h1>
          <h3 className="position">Developer</h3>
          <h4 className="about">
          Developed a loan program The program
          can calculate the loan Interest rates and
          various installments using Python language
          </h4>
          <a className="contact-member">
            <span>More</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">ECOMMERCE WEBSITE PROJECT</h1>
          <h3 className="position">Developer</h3>
          <h4 className="about">
          <br/>- Responsible for analyzing and translatinguser requirements<br/>
          - Designed User scenario, Wireframe and UIprototyping also worked with Front-endteam.
          </h4>
          <a className="contact-member">
            <span>More</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">AIRLINE WEBSITE PROJECT</h1>
          <h3 className="position">Developer</h3>
          <h4 className="about">
          <br/>- Front end developer<br/>
          - Worked with MySQL and JavaScript
          </h4>
          <a className="contact-member">
            <span>More</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
