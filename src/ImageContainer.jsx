/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

export function ImageContainer({ arrayImage, shuffleImageArray }) {
  const [newArrayImage, setNewArrayImage] = useState([]);
  useEffect(() => {
    setNewArrayImage(arrayImage);
  });
  const handleClick = (e) => {
    const cardId = e.currentTarget.getAttribute("id");
    let shuffle = [];
    shuffle = shuffleImageArray(newArrayImage);
    setNewArrayImage(shuffle);
  };
  return (
    <>
      {newArrayImage?.map((poke) => {
        return (
          <>
            <div
              className="component-container"
              key={poke.id}
              onClick={handleClick}
            >
              <img
                className="image-container"
                src={poke.url}
                style={{ width: 350, height: 350 }}
              />
              <p>{poke.name}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
