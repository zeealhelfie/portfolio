import { Container } from "react-bootstrap";
import logo from "../assets/img/ZAHRAA.png";
import navIcon1 from "../assets/img/icons8-linkedin-30.png";

export const Footer = () => {
  const footerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the alpha channel (0.5) as needed for transparency
    padding: "20px", // Add padding
    margin: "10px 0", // Add margin (10px top and bottom, 0px left and right)
  };

  return (
    <footer style={footerStyle} className="text-center text-black">
      <Container>
        <div className="p-4 pb-0">
          © 2023 Copyright:
          <a
            className="text-black"
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile/"
          >
            linkedin
          </a>
        </div>
      </Container>
    </footer>
  );
};
