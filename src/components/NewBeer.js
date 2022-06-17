import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrew, setFirstBrew] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      firstBrew,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributedBy,
    };

    axios.post(`${API_BASE_URL}/beers/new`, body).then((response) => {
      setName("");
      setTagline("");
      setDescription("");
      setFirstBrew("");
      setBrewersTips("");
      setAttenuationLevel(0);
      setContributedBy("");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="firstBrew"
          value={firstBrew}
          onChange={(e) => setFirstBrew(e.target.value)}
        />

        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />

        <label>Attenuation Level</label>
        <input
          type="text"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />

        <label>Contributed By</label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
