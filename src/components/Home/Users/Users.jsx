import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.scss";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get("https://example-data.draftbit.com/users?_limit=5")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="users-container">
        <h1>Our Users</h1>
        <div className="user-wrapper">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="card-wrapper">
                <div className="img-wrapper">
                  <img
                    src={user.avatar}
                    alt={user.fullName}
                    className="avatar"
                  />
                </div>
                <div className="user-info">
                  <h2>{user.fullName}</h2>
                  <p>
                    <b>Username:</b> {user.username}
                  </p>
                  <p>
                    <b>Email:</b> {user.email}
                  </p>
                  <p>
                    <b>Phone:</b> {user.phone}
                  </p>
                  <div className="user-btn">
                    <Link to={`/profile/${user.id}`}>
                      <button>Check Profile</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
