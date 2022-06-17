import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/beers`).then((response) => {
      console.log("response.data", response.data);
      setAllBeers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>AllBeers</h1>
      <div className="beer-grid">
        {allBeers.map((beer) => (
          <div key={beer._id} className="card">
            <div>
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div>
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>{beer.contributed_by}</p>
              <Link to={`/beer/${beer._id}`}>More Info...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeers;
