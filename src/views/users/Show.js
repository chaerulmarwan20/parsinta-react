import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const [user, setUser] = useState({});
  const { identifier } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier}`
      );
      setUser(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, [identifier]);

  return (
    <div className="container">
      <div class="card">
        <div class="card-header">{user.name}</div>
        <div class="card-body">
          <div>{user.username}</div>
          <div>{user.website}</div>
          <div>{user.phone}</div>
          <div>{user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Show;
