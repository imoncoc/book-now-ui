import React from 'react';
import bg_home from '../../assets/bg-home.jpg'
import Booking from '../Booking/Booking';

const Home = () => {
    return (
      <>
        <div className="banner-img">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto">
                <div
                  className="text-white text-center d-flex justify-content-center align-items-center"
                  style={{ height: "90vh" }}
                >
                  <div>
                    <h2 className="fs-1 fw-bold opacity-75">Burj Al Arab</h2>
                    <p className="fs-3 fw-semibold opacity-50">
                      A Global icon of Arabian Luxury
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Booking></Booking>
      </>
    );
};

export default Home;