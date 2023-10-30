import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/output.png";
import projImg2 from "../assets/img/r^2plot.png";
import projImg3 from "../assets/img/000010.png";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/classi2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      description: "Gradient Descent: Advertising",
      imgUrl: projImg1,
      githubUrl: "https://github.com/zeealhelfie/GradientDescentAdvertising",
    },
    {
      description: "The House Price Prediction Models",
      imgUrl: projImg2,
      githubUrl: "https://github.com/zeealhelfie/theHousePricePredictionModels",
    },
    {
      description: "Clustering of Categorical Data: Mushroom Classification",
      imgUrl: projImg3,
      githubUrl: "https://github.com/zeealhelfie/CategoricalDataAnalysis",
    },
    {
      description: "Classification of Handwritten Digits",
      imgUrl: projImg6,
      githubUrl:
        "https://github.com/zeealhelfie/Math425-Final-Project/blob/master/section%233/classifications.ipynb",
    },
    {
      description: "To Do App",
      imgUrl: projImg4,
      githubUrl: "https://github.com/yourusername/project4",
    },
    {
      description: "mysql Employee Tracker",
      imgUrl: projImg5,
      githubUrl: "https://github.com/yourusername/project5",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated" : ""}>
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>{}</Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
