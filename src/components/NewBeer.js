import React, { useState, useEffect } from "react";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrew, setFirstBrew] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" name="name" value={name} />
      </form>
    </div>
  );
}

export default NewBeer;
