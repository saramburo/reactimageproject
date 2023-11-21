/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

export function ImageContainer({ arrayImage, shuffleImageArray }) {
  const [newArrayImage, setNewArrayImage] = useState([]);
  const [score, setScore] = useState(1);
  const [listCorrectPicksId, setListCorrectPicksId] = useState([]);

  const addScore = (id) => {
    //const addId=listCorrectPicksId.concat(id)
    setListCorrectPicksId((prev)=>([...prev,id]));
    setScore((prev)=>(prev+1))
  };


  const gameOver=()=>{
    setScore(1)
    setListCorrectPicksId([])
    alert("you lost the game.")
  }
  
useEffect(() => {
  const arr=arrayImage
  setNewArrayImage(arr);
  console.log(listCorrectPicksId);
},[listCorrectPicksId,arrayImage]);
 

  const handleClick = (e) => {
    //let shuffle = [];
    const cardId = e.currentTarget.getAttribute("value");
   let shuffle = shuffleImageArray(newArrayImage);
    if (!listCorrectPicksId.includes(cardId)) {
      addScore(cardId);
     
       console.log(score);
    }else{
      gameOver()
    }	
   
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
