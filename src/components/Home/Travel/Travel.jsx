import React from "react";
import "./travel.scss";
import travel from "../../../assets/images/travel-desktop (1).webp";
import { Link } from "react-router-dom";
function Travel() {
  return (
    <div className="travel-container">
      <div className="travel-wrapper">
        <div className="hero1-wrapper">
          <div className="title-wrapper">
            <h1>High Flyer</h1>
          </div>
          <div className="desc-wrapper">
            <div className="titlep">
              <p>Built for (spontaneous) travel.</p>
            </div>
            <p>
              No matter where your next grand tour takes you, Atlas is there as
              your co-pilot, with bespoke flight benefits for when you're ready
              to go on the spur of the moment.
            </p>
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={travel} alt="travel" />
      </div>
      <div className="smaller-title">
        <p>BESPOKE FLIGHT BENEFITS, INSIDE ATLAS APP.</p>
      </div>
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>5x points with BLADE³</p>
            </div>
            <div className="list-desc">
              <p>
                Members get seated at prime time, when availability is typically
                the hardest to get.Exclusive reward for Atlas cardholders on all
                BLADE helicopter rides and flights.
              </p>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>CLEAR Plus membership⁴</p>
            </div>
            <div className="list-desc">
              <p>
                Fast forward through airport security with included CLEAR Plus
                annual membership.
              </p>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Cancel flights without fees⁵</p>
            </div>
            <div className="list-desc">
              <p>
                Change or cancel any flight, at any time, for any reason and get
                fees reimbursed up to $600 a year.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="last-container">
        <div className="last-wrapper">
          <div className="last-title">
            <p>+</p>
            <p>Visa Infinite Benefits⁶</p>
          </div>
          <div className="last-desc">
            <p>
              Priority Pass, Luxury Hotel Collection, no foreign transaction
              fees, and more.
            </p>
          </div>

          <Link to="/visa">
            <button>Discover</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Travel;
