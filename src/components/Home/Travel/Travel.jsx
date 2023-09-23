import React from "react";
import "./travel.scss"

function Travel() {
  return (
    <div className="travel-container">
      <div className="travel-wrapper">
        <div className="hero1-wrapper">
          <div className="title-wrapper">
            <h1>High Flyer</h1>
          </div>
          <div className="desc-wrapper">
            <p>
              <strong>Built for (spontaneous) travel.</strong>
            </p>
            <p>
              No matter where your next grand tour takes you, Atlas is there as
              your co-pilot, with bespoke flight benefits for when you're ready
              to go on the spur of the moment.
            </p>
          </div>
        </div>
        <div className="image-wrapper"></div>
        <div className="list-wrapper"></div>
      </div>
    </div>
  );
}

export default Travel;
