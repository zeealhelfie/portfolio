import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/ZAHRAA.png";
import navIcon1 from "../assets/img/icons8-linkedin-30.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = ({ hideMailchimpForm }) => {
  // Receive a prop to determine whether to hide the MailchimpForm
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {!hideMailchimpForm && <MailchimpForm />}{" "}
          {/* Conditionally render the MailchimpForm */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
