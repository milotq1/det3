import React from "react";
import "./Main.scss";
import Visa from "../../../assets/images/Visa.png";
import visaInfinite from "../../../assets/images/visainfinite.svg";

function Main() {
  return (
    <div className="main">
      <div className="main-section">
        <div className="default-container">
          <div className="container__visa">
            <h1 className="heading__visa">
              Atlas Benefits <br /> by Visa Infinite{" "}<sup>®</sup>
            </h1>
            <p class="subheading__visa">
              Premier travel perks and protection, all included with your Atlas
              Visa Infinite card.
            </p>
            <div className="button__visa">
              <a href="#overview" className="product-link-button">
                <div class="link-text">See your benefits &nbsp;–&gt;</div>
              </a>
            </div>
          </div>
        </div>
        <div className="main-section-background">
            <img src={Visa} alt="visa Woman" className="main-section-background-image"/>
            <div className="main-section-background-color">

            </div>
        </div>
      </div>
      <div className="visa-benefits">
      <p class="visa--benefits-text" >Benefits provided by</p>
      <div class="vertical-ruler"></div>
      <img src={visaInfinite} alt="Visa infinite" className="visa-infinite-img" />
      </div>
    </div>
  );
}

export default Main;
