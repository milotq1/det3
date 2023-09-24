import React from "react";
import "./Member.scss";
import Woman from "../../assets/Membership/Atlas Image/Woman3.jpg";
import AtlasLogo from "../../assets/Membership/Atlas Logo/AtlasLogo.jpg";
import FloatingLabelInput from "../FloatingLabelInput/FloatingLabelInput";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import SecondFooter from "../../components/SecondFooter/SecondFooter";

function Member() {
  return (
    <div className="split-container">
      <div className="primary-container">
        <div className="image-container">
          <img
            src={Woman}
            alt="A woman"
            className="image-woman"
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
      <div className="secondary-container">
        <div className="waitlist-container">
          <div className="content">
            <div className="header">
              <a href="/">
                <img src={AtlasLogo} alt="Atlas Logo" />
              </a>
              <hr />
            </div>
            <div className="mt-12 mb-8">
              <div className="animate--fade-and-slide-in">
                <form className="Forma">
                  <h1>Request an invite.</h1>
                  <div className="Text">
                    Please tell us a bit about yourself so that we may review
                    your request for an application.
                  </div>
                  <div>
                    <FloatingLabelInput
                      inputs={[
                        { placeholder: "First Name", type: "text" },
                        { placeholder: "Last Name", type: "password" },
                        { placeholder: "Email", type: "email" },
                        { placeholder: "Phone Number", type: "number" },
                        { placeholder: "City", type: "text" },
                        {
                          placeholder: "Estimated Monthly Spending",
                          type: "number",
                        },
                        {
                          placeholder: "Where did you hear about Atlas",
                          type: "text",
                        },
                        {
                          placeholder: "Instagram Username (optional)",
                          type: "text",
                        },
                      ]}
                    />
                  </div>
                  <div className="checkbox-container">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 40,
                              transition: "all 0.3s",
                            },
                            marginTop: 0,
                            marginLeft: "80px",
                          }}
                        />
                      }
                      label={
                        <span style={{ color: "grey", marginLeft: "10px" }}>
                          I agree to the <a href="/membership">Terms of Use</a> and{" "}
                          <a href="/membership">Privacy Policy</a>.
                        </span>
                      }
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 40,
                              transition: "all 0.3s",
                            },
                            marginTop: 0,
                            marginLeft: "80px",
                          }}
                        />
                      }
                      label={<span style={{ color: "grey", marginLeft: "10px" }}>I agree to receiving invite updates via email.</span>}
                    />
                  </div>

                  <button className="submit-button">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <SecondFooter />
        </div>
      </div>
    </div>
  );
}

export default Member;
