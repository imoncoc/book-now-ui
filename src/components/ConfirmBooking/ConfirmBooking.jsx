import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ConfirmBooking = () => {
  const singleBooking = useLoaderData();
  console.log(singleBooking)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-5 text-center">
            <h2>This is Booking Page</h2>
            <Link to="/">
              <button className="btn btn-warning">&larr; Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ConfirmBooking;