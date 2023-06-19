import { Container, Row, Col } from "react-bootstrap";
import { projectCard } from "./ProjectCard";

export const Projects = () => {
    const projects = [
        {
            title: "ERPNext HR Module",
            description: "ERPNext",
            imgUrl: projectImg1,
            gitUrl: projectGit1,
        },
        {
            title: "ERPNext HR Module",
            description: "ERPNext",
            imgUrl: projectImg1,
            gitUrl: projectGit1,
        },
        {
            title: "ERPNext HR Module",
            description: "ERPNext",
            imgUrl: projectImg1,
            gitUrl: projectGit1,
        },
        {
            title: "ERPNext HR Module",
            description: "ERPNext",
            imgUrl: projectImg1,
            gitUrl: projectGit1,
        },
        {
            title: "ERPNext HR Module",
            description: "ERPNext",
            imgUrl: projectImg1,
            gitUrl: projectGit1,
        },
        {
            title: "ERPNext HR Module",
            description: "ERPNext",
            imgUrl: projectImg1,
            gitUrl: projectGit1,
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <P>I have many projects as I learned and created projects for both Flutter, Web (Front-End, ASP.Net, Diango), and ERPNext.</P>
                        <Tab.Container id="projects-tabs" defaultAcriveKey="first">
                            <Nav variant="pills" defaultAcriveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">ERP</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Apps</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return (
                                                    <projectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row></Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row></Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}