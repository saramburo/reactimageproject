import React, { useState } from "react";

export function Header({ score, highestScore }) {
  return (
    <>
      <div className="main-header">
        <header>
          <h1>Pokemon Memory Game</h1>
        </header>
        <div className="score-section" >
          <div className="score">
            <h2>Current Score</h2>
            <p className="result">{score}</p>
          </div>
          <div className="score" >
            <h2>Highest Score</h2>
            <p className="result">{highestScore}</p>
          </div>
        </div>
      </div>
    </>
  );
}
