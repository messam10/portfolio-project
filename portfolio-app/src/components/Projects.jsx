import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import projectImg1 from "../assets/img/project-img1.png";
import projectImg2 from "../assets/img/project-img2.png";
import projectImg3 from "../assets/img/project-img3.png";
import projectImg4 from "../assets/img/project-img4.png";
import projectImg5 from "../assets/img/project-img5.png";
import projectImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "ERPNext POS Module",
      description: "ERPNext",
      imgUrl: projectImg1,
      gitUrl: "",
    },
    {
      title: "ERPNext HR Module",
      description: "ERPNext",
      imgUrl: projectImg2,
      gitUrl: "",
    },
    {
      title: "ERPNext Heathcare",
      description: "ERPNext",
      imgUrl: projectImg3,
      gitUrl: "",
    },
    {
      title: "Student Store | Re:Coded",
      description: "React.js & Next.js",
      imgUrl: projectImg4,
      gitUrl: "",
    },
    {
      title: "FiftyStore Ecommerce",
      description: "React.js",
      imgUrl: projectImg5,
      gitUrl: "",
    },
    {
      title: "Jumanji Game",
      description: "React.js",
      imgUrl: projectImg6,
      gitUrl: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have many projects as I learned and created projects for
                    both Flutter, Web (React.js, Next.js, ASP.Net, Django), and
                    ERPNext.
                  </p>
                  <Tab.Container id="projects-tabs" defaultAcriveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">One</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Two</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Three</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <p>Soon</p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <p>Soon</p>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
      <projectCard />
    </section>
  );
};

export default Projects;
