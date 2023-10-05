import React from "react";
import { useState } from "react";
function HogCard({ name, image }) {
  const [hiddenState, setHiddenState] = useState(true);
  setHiddenState((event) => {
    if hiddenState = true
    
  });
  return (
    <div>
      <img src={image}></img>
      <p>{name}</p>
    </div>
  );
}
export default HogCard;
