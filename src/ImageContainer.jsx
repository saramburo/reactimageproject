/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

export function ImageContainer({ arrayImage,suffleImageArray }) {

  return (
    <>
      {arrayImage.map((poke) => {
        return (
          <>
            <div className="component-container" onClick={suffleImageArray} key={poke.id}>
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
