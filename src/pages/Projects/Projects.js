import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          MongoDB is a NoSQL database that is schema-free, which means that you
          do not need to define the structure of your data in advance.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            {/* First project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Portflio Website</span> */}
                  <img
                    src="./image/portfolio.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  {/* <span className="card-detail-badge">CSS</span> */}
                  <span className="card-detail-badge">ReactJs</span>
                  {/* <span className="card-detail-badge">react</span> */}
                  {/* <span className="card-detail-badge">Mongodb</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase" id="color">
                     Portflio Website
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/BiproMondal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github link
                  </a>
                </div>
              </div>
            </div>
            {/* second project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Mern Website</span> */}
                  <img
                    src="./image/blogger-app.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Js</span>
                  <span className="card-detail-badge">Firebase</span>
                  <span className="card-detail-badge">NodeJs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase" id="color">Blogger Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/BiproMondal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            {/* Third project */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Backend</span> */}
                  <img
                    src="./image/task.jpg"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>
                  <span className="card-detail-badge">Expo</span>

                  <span className="card-detail-badge">android</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase" id="color">Task App</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/BiproMondal"  target="_blank"
                  rel="noopener noreferrer">
                    Github Link
                  </a>
                </div>
              </div>
            </div>
            {/* Forth project */}
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
