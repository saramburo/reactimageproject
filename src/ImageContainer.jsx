/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

export function ImageContainer({ arrayImage, shuffleImageArray }) {
  const [newArrayImage, setNewArrayImage] = useState([]);
  const [score, setScore] = useState();
  const [listCorrectPicksId, setListCorrectPicksId] = useState([]);

  const addScore = (id) => {
    setListCorrectPicksId(listCorrectPicksId.concat(id));
  };
  const checkImage = (array) => {};

  useEffect(() => {
    setNewArrayImage(arrayImage);
  });
  const handleClick = (e) => {
    let shuffle = [];
    const cardId = e.currentTarget.getAttribute("key");
    shuffle = shuffleImageArray(newArrayImage);

    console.log(cardId);
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
