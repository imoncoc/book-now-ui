import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faEnvelope, faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
      <footer id="footer" className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 px-3 text-center my-3">
              <Link to="/" className="navbar-brand">
                <h3 className="text-white fw-semibold">Book Now</h3>
              </Link>
              <p className="text-muted my-3 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nam architecto saepe numquam dicta velit culpa laboriosam
                expedita consectetur cum!
              </p>
              <a href="#" className="text-green service-link text-capitalize">
                read more
                <span className='ms-2'>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-5 px-3 text-center my-3 mx-auto">
              <div className="row">
                <div className="col text-center mb-3">
                  <h1 className="text-uppercase text-white">contact us</h1>
                  <div className="title-underline my-3 bg-secondary mx-auto">
                    <div className="title-underline__center"></div>
                  </div>
                </div>
              </div>

              <div className="single-contact px-5 my-3 d-flex justify-content-between">
                <span className="text-green me-3">
                  <FontAwesomeIcon icon={faMap} />
                </span>
                <p className="text-white text-capitalize">
                  123 main street venice, CA 90020
                </p>
              </div>

              <div className="single-contact px-5 my-3 d-flex justify-content-between">
                <span className="text-green me-3">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <p className="text-white text-capitalize">+ 123 456 789</p>
              </div>

              <div className="single-contact px-5 my-3 d-flex justify-content-between">
                <span className="text-green me-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p className="text-white">imoncoc@gmail.com</p>
              </div>

              <div className="single-contact px-5 my-3 d-flex justify-content-between">
                <span className="text-green me-3">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <p className="text-white text-capitalize">
                  mon - sat 8:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;