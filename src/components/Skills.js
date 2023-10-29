import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";

export const Skills = () => {
  const pStyle = {
    margin: "0", // Remove margin on <p> elements
    lineHeight: "1.4", // Set the desired line height
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="skill-list">
                <div className="row">
                  <div className="col-md-6">
                    <div className="item">
                      <img
                        src={meter1}
                        alt="Image"
                        style={{ maxWidth: "100px" }}
                      />
                      <h5>Data Science</h5>
                      <p style={pStyle}>
                        <strong>Languages:</strong> Python, R, SQL
                      </p>
                      <p style={pStyle}>
                        <strong>Data Manipulation:</strong> Data cleaning, data
                        wrangling
                      </p>
                      <p style={pStyle}>
                        <strong>Data Analysis:</strong> Data visualization,
                        statistical modeling
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item">
                      <img
                        src={meter2}
                        alt="Image"
                        style={{ maxWidth: "100px" }}
                      />
                      <h5>Web Development</h5>
                      <p style={pStyle}>
                        <strong>Languages:</strong> JavaScript (React), HTML,
                        CSS
                      </p>
                      <p style={pStyle}>
                        <strong>Frameworks:</strong> React
                      </p>
                      <p style={pStyle}>
                        <strong>Server-side programming</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
