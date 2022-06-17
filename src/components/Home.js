import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="banner">
        <Link to={"/beer"}>
          <h1>All the Beers</h1>
        </Link>
      </div>
      <div className="banner">
        <Link to={"/randomBeer"}>
          <h1>Random Beer</h1>
        </Link>
      </div>
      <div className="banner">
        <h1>New Beer</h1>
      </div>
    </div>
  );
}

export default Home;
