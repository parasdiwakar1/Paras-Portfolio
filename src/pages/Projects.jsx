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
              imgPath='https://i.ibb.co/8mwnXqQ/Screenshot-2025-01-11-080410.png'
              isBlog={false}
              title=" Food-Website"
              description="Built a responsive food website using React.js with dynamic categories (breakfast, lunch, dinner) and interactive
 filters, ensuring cross-device compatibility and optimized performance"
               ghLink='https://github.com/parasdiwakar1/food--website'
              demoLink="https://food-website-delta-silk.vercel.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/4jryQxh/Screenshot-2025-01-11-080456.png  '
              isBlog={false}
              title="Freelancing Website Project"
              description=" Developed a fully functional freelancing website with both user and admin panels. The platform allows users to
 register, post projects, track progress, and leave reviews. It features secure authentication, email notifications,
 and a database-driven system for storing user and project data. The site is SEO-optimized and ensures smooth
 user interactions. Added multiple features for better usability and engagement"
              //  ghLink='https://github.com/parasdiwakar1/StopWatch'
              demoLink="https://collaboratex--eight.vercel.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/zFfbrXH/Screenshot-2024-09-02-225650.png'
              isBlog={false}
              title="Trello Tracker"
              description="A project management tool inspired by Trello, designed for tracking and managing tasks and team collaboration"
              ghLink="https://github.com/parasdiwakar1/Trello_Tracker"
              demoLink="https://trellotracker.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/whSW9W4/Screenshot-2024-09-02-230530.png'
              isBlog={false}
              title="Food-Website"
              description="A dynamic website showcasing various food recipes and cooking tips, designed for culinary enthusiasts."
              ghLink="https://github.com/parasdiwakar1/food-website"
              demoLink="https://66a60ddbc81f7a0084946b86--papaya-cajeta-90adac.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/pw8ZbHq/Screenshot-2024-09-02-225905.png'
              isBlog={false}
              title="E-Commerce-Website"
              description="An online platform for buying and selling products with a user-friendly interface and secure payment options."
              ghLink="https://github.com/parasdiwakar1/Shopping-cart"
              demoLink="https://shopping-website-wheat-theta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/Hhhrpbt/Screenshot-2024-09-02-225741.png'
              isBlog={false}
              title='food-menu-website'
              description="A menu display website for restaurants, showcasing various dishes with beautiful images and descriptions."
              ghLink='https://github.com/parasdiwakar1/food-menu-website'
              demoLink="https://food-recipes-website-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/0DMS7NT/Screenshot-2024-09-02-225834.png'
              isBlog={false}
              title="Photo Snap"
              description="A photo-sharing website where users can upload, share, and comment on photos, with advanced editing tools."
              
               ghLink='https://github.com/parasdiwakar1/Photo_Snap_Group6'
              demoLink='https://photo-editor-xunn.vercel.app/'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://i.ibb.co/K6gWVz2/Screenshot-2024-09-02-230152.png'
              isBlog={false}
              title="StopWatch"
              description="A simple stopwatch application with start, stop, and reset functionalities for tracking time accurately."
               ghLink='https://github.com/parasdiwakar1/StopWatch'
              demoLink="https://663da9da143d03ac8d976b6a--frolicking-selkie-6a4f8c.netlify.app/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects