import React from "react";
import "./SecondFooter.scss";
import AtlasImage from "../../assets/Membership/Atlas Logo/Atlas.jpg";
import RunnerImage from "../../assets/Membership/Atlas Image/runner.png";

function SecondFooter() {
  return (
    <div className="footer__body">
      <div className="footer">
        <div className="content">
          <footer className="@container">
            <div className="atlasIcon">
              <img src={AtlasImage} alt="Atlas Logo" className="imgAtlasi" />
            </div>
            <div className="footer-pages">
              <div className="footer__part">
                <div className="footer__grey">Atlas</div>
                <a href="/dining" className="footer__blue">
                  Dining
                </a>
                <a href="/travel" className="footer__blue">
                  Travel
                </a>
                <a href="/card" className="footer__blue">
                  Card
                </a>
                <a href="/apps1" className="footer__blue">
                  App
                </a>
                <a href="/concierge" className="footer__blue">
                  Concierge
                </a>
              </div>

              <div className="footer__part">
                <div className="footer__grey">Benefits</div>
                <a href="/" className="footer__blue">
                  Atlas Benefits
                </a>
                <a href="/visa" className="footer__blue">
                  Visa Infinite
                </a>
              </div>

              <div className="footer__part">
                <div className="footer__grey">Contact</div>
                <a
                  href="mailto:hello@atlascard.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="footer__blue"
                >
                  Email
                </a>
                <a
                  href="https://twitter.com/atlascardhq"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="footer__blue"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com/atlascardhq"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="footer__blue"
                >
                  Instagram
                </a>
              </div>

              <div className="footer__part">
                <div className="footer__grey">Legal</div>
                <a
                  href="https://atlascard.com/legal/privacy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer__blue"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://atlascard.com/legal/terms"
                  target="_blank"
                  className="footer__blue"
                  rel="noreferrer noopener"
                >
                  Terms of Use
                </a>
                <a
                  href="https://atlascard.com/legal/statement-disclosure"
                  target="_blank"
                  className="footer__blue"
                  rel="noreferrer noopener"
                >
                  Statement Disclosure
                </a>
              </div>

              <div className="footer__part">
                <div className="footer__grey">About</div>
                <a
                  href="https://assets.atlascard.com/media/atlas_media_kit.zip"
                  target="_blank"
                  className="footer__blue"
                  rel="noreferrer noopener"
                >
                  Media Kit
                </a>
              </div>

              <div className="end-footer">
                <div className="runner">
                  <img src={RunnerImage} alt="Runner Image" />
                </div>
              </div>
              <hr />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default SecondFooter;
