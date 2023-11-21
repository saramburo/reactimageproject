import React, { useState } from "react";

export function Header({ score, highestScore }) {
  return (
    <>
      <div className="main-header">
        <header>
          <h1>Memory Game</h1>
        </header>
        <div className="score-section">
          <div className="current-score">
            <h2>Current Score</h2>
            <p>{score}</p>
          </div>
          <div className="highest-score">
            <h2>Highest Score</h2>
            <p>{highestScore}</p>
          </div>
        </div>
      </div>
    </>
  );
}