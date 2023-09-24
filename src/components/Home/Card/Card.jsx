import React, { useEffect, useRef } from "react";
import cardVideo from "../../../assets/videos/atlas-woman.mp4";
import "./card.scss";
import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";

function Card() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);
  return (
    <div className="card-container">
      <div className="hero-container">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src={cardVideo}
            autoPlay
            playsInline
            muted
          ></video>
          <p>
            <small>THE WORLD IN YOUR HAND, WITH ATLAS CARD.</small>
          </p>
        </div>
        <div className="hero-text">
          <div className="hero-title">
            <h4>Head Turner</h4>
          </div>
          <div className="text">
            <div className="text1">
              <p>Designed to shatter the norm.</p>
            </div>
            <p>
              Atlas is crafted to mirror our uncommon obsession with every
              single detail, always in pursuit of elevating you above the crowd,
              while also enhancing your privacy.
            </p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="cardscards">
          <div className="card1">
            <img src={card1} alt="card1" />
          </div>
          <div className="card2">
            <img src={card2} alt="card2" />
          </div>
        </div>
        <p>
          <small>DESIGNED AND ENGINEERED, FRONT TO BACK.</small>
        </p>
      </div>
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Advanced construction</p>
            </div>
            <div className="list-desc">
              <p>
                Made from 21 grams of high density steel, CNC-milled and
                engraved, then polished to a brilliant mirror finish that is
                unlike any card
              </p>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Enhanced privacy</p>
            </div>
            <div className="list-desc">
              <p>
                With no visible card number on its surface, Atlas keeps your
                privacy where it belongs, in your own hands.⁷
              </p>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="list-center">
            <div className="list-title">
              <p>Personalized for you</p>
            </div>
            <div className="list-desc">
              <p>
                Designed front to back, Atlas card features tone-on-tone
                graphics and a personal icon of your choice by your name.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
