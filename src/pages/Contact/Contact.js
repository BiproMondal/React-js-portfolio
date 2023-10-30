import React from "react";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from 'react-icons/md';
const Contact = () => {
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-lg-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h2 className="contact-w">Contact With</h2>
                      <h2 className="contact-w" id="contact-wp">Whatsapp Number</h2>
                      <h2 className="contact-w">+91 9932224243</h2>
                      <h5 className="contact-w">bipromondal9932@gmail.com</h5>
                    </div>
                    <div className="row" id="link">
                      <h2>
                        <a
                          href="https://www.facebook.com/codingbipro"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsFacebook color="blue" size={50} className="ms-3" />
                        </a>
                        <a
                          href="https://github.com/BiproMondal"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub color="black" size={50} className="ms-3" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/bipro-mondal"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsLinkedin size={50} className="ms-3" />
                        </a>
                        <a
                          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MdOutlineEmail color="black" size={50} className="ms-3" />
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
