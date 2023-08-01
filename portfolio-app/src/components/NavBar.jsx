import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/icons8-github (2).svg";
import logo from "../assets/img/React.webp";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScrolled = () => {
      if (window.scrollY > 50)
        setScrolled(true);
      else
        setScrolled(false);
    }
    window.addEventListener("scroll", onScrolled);
    return () => window.removeEventListener("scroll", onScrolled);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="React" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => { onUpdateActiveLink("home") }}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => { onUpdateActiveLink("skills") }}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => { onUpdateActiveLink("projects") }}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/malqershi98/"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=100006287622110"><img src={navIcon2} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => { window.open("https://app.enhancv.com/share/26a81ac9", "_blank") }}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;