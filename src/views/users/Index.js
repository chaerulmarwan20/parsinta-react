import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user, idx) => {
          return (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <div className="mb-4">
                    <a
                      href={`http://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="d-block mb-2"
                    >
                      {user.website}
                    </a>
                    {user.username}
                  </div>
                  <NavLink className="btn btn-primary" to={`/users/${user.id}`}>
                    View Profile
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
