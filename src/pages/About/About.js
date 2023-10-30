import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="./image/about.jpg" alt="My_photo" />
            </div>

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am{" "}
                <strong>
                  <a
                    className="text-underline"
                    style={{ color: "#25d366" }}
                    href="https://www.facebook.com/codingbipro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bipro Mondal
                  </a>
                </strong>
                , a proficient full-stack MERN (MongoDB, Express.js, React,
                Node.js) web developer with a passion for creating innovative
                and user-centric digital experiences. With a solid foundation in
                both front-end and back-end technologies, I specialize in
                crafting seamless and responsive web applications that engage
                and captivate users. My journey in the world of web development
                has equipped me with expertise in designing intuitive user
                interfaces, architecting robust databases, and implementing
                efficient server-side logic. I am dedicated to continuous
                learning, staying updated with the latest industry trends, and
                delivering high-quality solutions that make a positive impact.
                Let's bring ideas to life through code!
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;

