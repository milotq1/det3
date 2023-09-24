import React from "react";
import "./concierge.scss";
import chat from "../../../assets/images/support-chat-desktop-con.jpg";
import wallet from "../../../assets/images/wallet.jpg";

function Concierge() {
  return (
    <div className="con-container">
      <div className="hero-container2">
        <div className="hero-wrapper1">
          <div className="hero-title">
            <p>Truly Personal</p>
          </div>
          <div className="hero-desc1">
            <p>At your beck and call (or text).</p>
          </div>
          <div className="hero-desc2">
            <p>
              Experience handcrafted support, with your own dedicated personal
              advisor who is on hand to fulfill any request, from last-minute
              dinner plans to deep dive sessions.
            </p>
          </div>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={chat} alt="chat" />
      </div>
      <div className="under-img1">
        <small>YOUR PERSONAL ADVISOR, NOW IN IMESSAGE.</small>
      </div>
      <div className="list-container3">
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Personal advisor</p>
            </div>
            <div className="list-desc">
              <p>
                Going to exceptional lengths to know your preferences and
                tastes, your advisor is here to provide truly personal support.
              </p>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>1 on 1 sessions</p>
            </div>
            <div className="list-desc">
              <p>
                For those times when it takes more than a text or a phone call,
                your personal advisor is just a quick booking away for a video
                call.
              </p>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Experiences concierge¹⁰</p>
            </div>
            <div className="list-desc">
              <p>
                From last-minute table reservations, to sold out events, your
                personal advisor is on hand to help you have a lifetime
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container1">
        <div className="img1">
          <img src={wallet} alt="wallet" />
          <p>YOUR PURCHASES, REIMAGINED AS MOMENTS.</p>
        </div>
      </div>
    </div>
  );
}

export default Concierge;
