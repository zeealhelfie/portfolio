import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/ZAHRAA.png";
import navIcon1 from "../assets/img/icons8-linkedin-30.png";
import { HashLink } from "react-router-hash-link";
import navIconCV from "../assets/img/iconsresume.png";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="custom-navbar-container">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="https://docs.google.com/document/d/1DOdejIGzGNcmCDcvRTw8x6FS0QERwyTT-rNXO3cRlJE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  activeLink === "cv" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("cv")}
              >
                <img src={navIconCV} alt="CV" />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  activeLink === "linkedin"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("in")}
              >
                <img src={navIcon1} alt="in" />
              </Nav.Link>
            </Nav>
            <HashLink to="#connect">
              <button className="vvd">
                <span>Contact</span>
              </button>
            </HashLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
