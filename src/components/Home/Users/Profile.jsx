import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams to access route parameters
import "./profile.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const { id } = useParams(); // Get the user ID from route parameters

  useEffect(() => {
    // Fetch user data based on the user ID
    axios
      .get(`https://example-data.draftbit.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]); // Include id in the dependency array to fetch data when it changes

  if (!user) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div>
      <Header />
      <div className="profile-container">
        <h1>User Profile</h1>
        <div className="profile-wrapper">
          <div className="profile-info">
            <div className="image-wrapper">
              <img
                src={user.avatar}
                alt={user.fullName}
                className="profile-avatar"
              />
            </div>
            <div className="profile-desc">
              <p>
                <b>Full Name:</b> {user.fullName}
              </p>
              <p>
                <b>Username: </b> {user.username}
              </p>
              <p>
                <b>Email:</b> {user.email}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>
              <p>
                <b>Bio:</b> {user.bio}
              </p>
              <div className="user-btn">
                    <Link to='/users'>
                      <button>GO BACK</button>
                    </Link>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
