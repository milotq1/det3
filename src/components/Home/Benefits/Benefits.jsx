import React from "react";
import "./benefits.scss";
import { Link } from "react-router-dom"

function Benefits() {
  return (
    <div className="benefits-container">
      <div className="title-container">
        <div className="title-wrapper">
          <h1>Executive, brief.</h1>
        </div>
        <div className="title2">
          <h1> Your next journey begins here.</h1>
          <div className="desc">
            <p>
              With all the essentials you need out in the world, and nothing to
              limit your possibilities, here is everything Atlas has to offer.
            </p>
          </div>
        </div>
      </div>
      <div className="list-container4">
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Dining</p>
            </div>
            <div className="list-desc">
              <ul>
                <li>Exclusive reservations with Atlas Supper Club</li>
                <li>Dedicated tables at partner restaurants</li>
                <li>Last-minute bookings</li>
                <li>Peak hours access</li>
              </ul>
            </div>
          </div>
          <div className="list-center">
            <div className="list-title">
              <p>Travel</p>
            </div>
            <div className="list-desc">
              <ul>
                <li>5x points with BLADE on helicopter rides and flights</li>
                <li>CLEAR Plus membership</li>
                <li>Cancel flights without fees</li>
              </ul>
            </div>
          </div>
          <div className="list-center">
            <div className="list-title">
              <p>Rewards & Benefits</p>
            </div>
            <div className="list-desc">
              <ul>
                <li>3x upgrade on top spending category</li>
                <li>1x points on every purchase</li>
                <li>One Medical membership¹¹</li>
                <li>Erewhon Cafe membership¹²</li>
                <li>FUTURE fitness training membership¹³</li>
              </ul>
            </div>
          </div>
          <div className="list-center">
            <div className="list-title">
              <p>Personal Advisor</p>
            </div>
            <div className="list-desc">
              <ul>
                <li>Advisor dedicated to your account</li>
                <li>1 on 1 sessions with available video calls</li>
                <li>Personalized dining and experiences concierge</li>
              </ul>
            </div>
          </div>
          <div className="list-center">
            <div className="list-title">
              <p>Card</p>
            </div>
            <div className="list-desc">
              <ul>
                <li>Charge card with no pre-set spending limits¹⁴</li>
                <li>
                  21 gram steel alloy, milled, engraved, and polished to a
                  brilliant mirror shine
                </li>
                <li>
                  Tone-on-tone card back, with your personal icon, and no card
                  number
                </li>
                <li>Visa Infinite</li>
                <li>Handle with care, clean with a microfiber cloth</li>
              </ul>
            </div>
          </div>
          <div className="list-center">
            <div className="list-title">
              <p>App</p>
            </div>
            <div className="list-desc">
              <ul>
                <li>True native iOS app with buttery-smooth performance</li>
                <li>Dark Mode support</li>
                <li>Instant purchase notifications</li>
                <li>Unlimited virtual cards</li>
                <li>Apple Pay</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="btnbtn">
        <Link to='/membership'><button>Become a founding member</button></Link>
        
      <p>$999/yr.</p>
      </div>
    </div>
  );
}

export default Benefits;
