import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  const anchorStyle = {
    color: "white",
    textDecoration: "none",
  };

  const imgStyle = {
    width: "100%", // Set the width to 100%
    height: "auto", // Allow the height to adjust accordingly
  };

  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={anchorStyle}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} style={imgStyle} /> {/* Apply the imgStyle here */}
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
