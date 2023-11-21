/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Header } from "./Header";
export function ImageContainer({
  arrayImage,
  shuffleImageArray,

  updateScore,
  updateHighScore,
}) {
  const [newArrayImage, setNewArrayImage] = useState([]);
  const [newScore, setNewScore] = useState(0);
  const [listCorrectPicksId, setListCorrectPicksId] = useState([]);
  const [newHighestScore, setNewHighestScore] = useState(0);

  const addScore = (id) => {
    //const addId=listCorrectPicksId.concat(id)
    setListCorrectPicksId((prev) => [...prev, id]);
    setNewScore((prev) => prev + 1);
  };

  function updateNewScore(value) {
    const val = updateScore(value);
  }

  const topScore = () => {
    if (newScore >= newHighestScore) {
      setNewHighestScore((prev) => prev + 1);
    }
  };
  const gameOver = () => {
    setNewScore(0);
    setListCorrectPicksId([]);
    alert("you lost the game.");
  };

  const gameWin = (array) => {
    if (newScore == array.length) {
      alert("You just won!! you are amazing");
    }
  };

  useEffect(() => {
    const arr = arrayImage;
    setNewArrayImage(arr);
  }, [listCorrectPicksId, arrayImage]);

  const handleClick = (e) => {
    //let shuffle = [];
    const cardId = e.currentTarget.getAttribute("value");
    let shuffle = shuffleImageArray(newArrayImage);
    if (!listCorrectPicksId.includes(cardId)) {
      addScore(cardId);

      gameWin(newArrayImage);
      topScore();
    } else {
      gameOver();
    }

    setNewArrayImage(shuffle);
  };

  return (
    <>
      <Header
        score={newScore}
        highestScore={newHighestScore}
        className="main-header"
      />
      {newArrayImage?.map((poke) => {
        return (
          <>
            <div
              className="component-container"
              key={poke.id}
              onClick={handleClick}
              value={poke.id}
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
