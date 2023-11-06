import React from "react";
import "./dining.scss";
import horses from "../../../assets/images/supper-club-desktop.jpg";
import firstpic from "../../../assets/images/first.jpg"
import secondpic from "../../../assets/images/felix-desktop.jpg"
import thirdpic from "../../../assets/images/cucina-desktop.jpg"

function Dining() {
  return (
    <div className="dining-container" id="dining">
      <div className="dining-wrapper">
        <div className="title-container">
          <div className="title-wrapper">
            <h1>Taste Maker</h1>
          </div>
          <div className="title2">
            <h1>Meet Atlas Supper Club.</h1>
            <div className="desc">
              <p>
                Skip past the endless waitlists and concierge calls that turn up
                empty handed. With Atlas, you have a seat at the table at
                today's most desirable restaurants.
              </p>
            </div>
          </div>
        </div>
        <div className="horses-wrapper">
          <img src={horses} alt="horses" />
        </div>
        <div className="list-container">
          <div className="list-wrapper">
            <div className="list-center">
              <div className="list-title">
                <p>Dedicated reservations¹</p>
              </div>
              <div className="list-desc">
                <p>
                  Access exclusive inventory at our restaurant partners
                  including – Horses, Felix Trattoria, Cucina Alba, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="list-wrapper">
            <div className="list-center">
              <div className="list-title">
                <p>Last-minute bookings²</p>
              </div>
              <div className="list-desc">
                <p>
                  With bookings available at short notice, you won't find
                  yourself on a waitlist.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="list-wrapper">
            <div className="list-center">
              <div className="list-title">
                <p>Access during peak hours</p>
              </div>
              <div className="list-desc">
                <p>
                  Members get seated at prime time, when availability is
                  typically the hardest to get.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-container">
          <div className="img1">
            <img src={firstpic} alt="first" />
            <p>HORSES, LA, ON ATLAS SUPPER CLUB.</p>
          </div>
          <div className="imgimg">
            <div className="img2">
              <img src={secondpic} alt="second" />
              <p>FELIX TRATTORIA, LA, ON ATLAS SUPPER CLUB</p>
            </div>
            <div className="img3">
              <img src={thirdpic} alt="third" />
              <p>CUCINA ALBA, NYC, ON ATLAS SUPPER CLUB.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dining;
