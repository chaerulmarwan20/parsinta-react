import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "First post",
                published: "8 Jun, 2021",
              }}
            />
          </div>
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "Second post",
                published: "12 Nov, 2021",
              }}
            />
          </div>
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "Third post",
                published: "11 Dec, 2021",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
