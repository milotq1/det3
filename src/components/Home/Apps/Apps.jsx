import React from "react";
import "./apps.scss";
import phone from "../../../assets/images/phone-in-hand.webp";
import firstpic from "../../../assets/images/moment-desktop-apps1.jpg";
import secondpic from "../../../assets/images/virtual-cards-desktop-apps2.jpg";
import thirdpic from "../../../assets/images/rewards-desktop-apps3.jpg";
function Apps() {
  return (
    <div className="apps-container">
      <div className="hero-container1">
        <div className="hero-wrapper1">
          <div className="hero-title">
            <p>Power Couple</p>
          </div>
          <div className="hero-desc1">
            <p>A dynamic duo of card + app.</p>
          </div>
          <div className="hero-desc2">
            <p>
              Each conceived from the same first principles, Atlas shines with a
              true native app that raises the bar, from magical rewards to
              unlimited cards, and everything in between.
            </p>
          </div>
        </div>
      </div>
      <div className="img-apps-wrapper">
        <img src={phone} alt="phone" />
      </div>
      <div className="under-img">
        <small>FAR ABOVE THE TYPICAL APP EXPERIENCE.</small>
      </div>
      <div className="list-container1">
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Dynamic rewards⁸</p>
            </div>
            <div className="list-desc">
              <p>
                Get automatically upgraded to 3x points where you spend the
                most, plus 1x points on every purchase. Because there's more to
                a rewarding life than chasing points.
              </p>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Unlimited virtual cards⁹</p>
            </div>
            <div className="list-desc">
              <p>
                Create a unique card for your next trip, or one to share with
                your assistant, or to go online shopping, or ... you get the
                idea.
              </p>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Intuitively powerful</p>
            </div>
            <div className="list-desc">
              <p>
                Buttery-smooth performance, support for features like Dark Mode,
                and endless details make an app that's a pleasure to use, day
                in, night out.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container1">
        <div className="img1">
          <img src={firstpic} alt="first" />
          <p>YOUR PURCHASES, REIMAGINED AS MOMENTS.</p>
        </div>
        <div className="imgimg">
          <div className="img2">
            <img src={secondpic} alt="second" />
            <p>CREATE AND MANAGE VIRTUAL CARDS.</p>
          </div>
          <div className="img3">
            <img src={thirdpic} alt="third" />
            <p>POINTS UPGRADES, WITH DYNAMIC REWARDS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;
