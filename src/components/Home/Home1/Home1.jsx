import React, { useEffect, useRef, useState } from "react";
import video from "../../../assets/videos/atlas-card.webm";
import "./home1.scss";

function Home1() {

  const videoRef = useRef(null);
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      
      videoRef.current.playbackRate = 1.5;
    }

    setAppear(true)
  }, []);
  return (
    // <div className="hero">
    <div className="hero-wrapper">
      <div className="hero">
        <div className="title-wrapper">
          <h1>No Limits</h1>
        </div>
        <div className="image-wrapper">
        <video ref={videoRef} src={video} preload="auto" autoPlay playsInline muted></video>
        </div>
      </div>
      <div className="text-wrapper">
        <p>
          This is your friend who scores the hottest tables in town, your
          passport to weekend getaways, and your guest pass to must-see events.
          All brilliantly brought together in a card and app of uncompromising
          beauty and utility. This is the beginning of a journey to a world with
          no limits.
        </p>
        <p className="statement">This is Atlas.</p>
      </div>
    </div>
    // </div>
  );
}

export default Home1;
