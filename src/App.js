import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [identifier, setIdentifier] = useState(1);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier}`
      );
      setUser(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, [identifier]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <input
              type="text"
              name="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="form-control"
            />
            {loading ? (
              <div className="mt-3 text-center">Loading...</div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>{user.phone}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
