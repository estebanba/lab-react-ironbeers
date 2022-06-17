import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API_BASE_URL } from "../utils/constants";

function DetailBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios.get(`${API_BASE_URL}/beers/random`).then((response) => {
      setBeer(response.data);
    });
  }, []);
  return (
    <div key={beer._id}>
      <div>
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default DetailBeer;
