import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBed, faPerson, faDollarSign, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Book = ({ book }) => {
    const { image, bed,  category, details, person, price, id } = book;
  return (
    <div className=" my-5 col-10 col-md-6 col-lg-4 mx-auto">
      <div className="card" style={{ width: "20rem" }}>
        <p className="card-text my-3">
          {" "}
          <span className="bg-danger text-white p-2 rounded-circle ms-2">
            {category[0]}
          </span>{" "}
          {category}
        </p>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{details}</p>
          <div className="d-flex justify-content-around">
            <p>
              <FontAwesomeIcon icon={faBed} />: {bed}
            </p>
            <p>
              <FontAwesomeIcon icon={faPeopleGroup} />: {person}
            </p>
            <p>
              <FontAwesomeIcon icon={faDollarSign} />: {price}
            </p>
          </div>
          <div className="text-center">
            <Link to={`/confirmBooking`} className="btn btn-primary w-100">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
