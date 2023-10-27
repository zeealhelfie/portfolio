import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="skill-list">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Data Science</h5>
                    <p>
                      <strong>Languages:</strong> Python, R, SQL
                    </p>
                    <p>
                      <strong>Data Manipulation:</strong> Data cleaning, data
                      wrangling
                    </p>
                    <p>
                      <strong>Data Analysis:</strong> Data visualization,
                      statistical modeling
                    </p>
                    <p>
                      <strong>Machine Learning:</strong> Algorithms, model
                      building and evaluation
                    </p>
                    <p>
                      <strong>Mathematical Modeling:</strong> Optimization,
                      Simulation
                    </p>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Web Development</h5>
                    <p>
                      <strong>Languages:</strong> JavaScript (React), HTML, CSS
                    </p>
                    <p>
                      <strong>Frameworks:</strong> React
                    </p>
                    <p>
                      <strong>Server-side programming</strong>
                    </p>
                    <p>
                      <strong>RESTful APIs</strong>
                    </p>
                    <p>
                      <strong>Version Control:</strong> Git
                    </p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
