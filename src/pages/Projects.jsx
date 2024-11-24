import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/zFfbrXH/Screenshot-2024-09-02-225650.png'
              isBlog={false}
              title="Trello Tracker"
              description="A project management tool inspired by Trello, designed for tracking and managing tasks and team collaboration"
              ghLink=""
              demoLink="https://trellotracker.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/whSW9W4/Screenshot-2024-09-02-230530.png'
              isBlog={false}
              title="Food-Website"
              description="A dynamic website showcasing various food recipes and cooking tips, designed for culinary enthusiasts."
              ghLink=""
              demoLink="https://66a60ddbc81f7a0084946b86--papaya-cajeta-90adac.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/pw8ZbHq/Screenshot-2024-09-02-225905.png'
              isBlog={false}
              title="E-Commerce-Website"
              description="An online platform for buying and selling products with a user-friendly interface and secure payment options."
              ghLink=""
              demoLink="https://shopping-website-wheat-theta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/Hhhrpbt/Screenshot-2024-09-02-225741.png'
              isBlog={false}
              title="A menu display website for restaurants, showcasing various dishes with beautiful images and descriptions."
              demoLink="https://food-menu-website-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/0DMS7NT/Screenshot-2024-09-02-225834.png'
              isBlog={false}
              title="Photo Snap"
              description="A photo-sharing website where users can upload, share, and comment on photos, with advanced editing tools."
              demoLink='https://photo-snap-group6.vercel.app/'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/K6gWVz2/Screenshot-2024-09-02-230152.png'
              isBlog={false}
              title="StopWatch"
              description="A simple stopwatch application with start, stop, and reset functionalities for tracking time accurately."
              
              demoLink="https://663da9da143d03ac8d976b6a--frolicking-selkie-6a4f8c.netlify.app/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects