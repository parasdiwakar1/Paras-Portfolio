import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Paras Diwakar</span> and I'm from{" "}
              <span className="yellow">Kanpur, Uttar Pradesh, India.</span>
              <br />
              <br />
              I am a passionate web developer, dedicated to creating innovative and responsive web solutions. 
              I am committed to delivering quality work and impactful designs.
              <br />
              <br />
              As a <b className="yellow">Full-Stack</b> developer, I enjoy tackling new challenges and continuously expanding my knowledge.
              <br />
              <br />
              I have knowledge in programming languages such as <b className="yellow">C, Python, JavaScript,</b> and have experience with <b className="yellow">C++</b>.
              <br />
              <br />
              I am passionate about working with <b className="yellow">Node.js, MongoDB,</b> and{" "}
              <i>
                <b className="yellow">modern JavaScript libraries and frameworks</b>
              </i>{" "}
              like <i><b className="yellow">React.js.</b></i>
              <br />
              <br />
              I am also interested in exploring new{" "}
              <i>
                <b className="yellow">Web Technologies and Products</b>
              </i>{" "}
              as well as delving into areas related to <b className="yellow">Blockchain.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src='https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png' className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect </span>with me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/parasdiwakar1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/parasdiwakar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/paras-diwakar-738611280/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/paras_d_70_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
