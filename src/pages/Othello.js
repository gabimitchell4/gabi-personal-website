import React from 'react';
import '../styles/Othello.css';

const DESCRIPTION = `This project implements Reversi (Othello), a two-player strategy game played on a grid of cells. Each player controls colored discs — black or white — and the goal is to flip your opponent's discs to your color.

Game play begins with equal numbers of both colors in the center. Black moves first. On each turn a player may:
  • Pass and let the other player move.
  • Place a disc on a legal empty cell.

A move is legal if the placed disc is adjacent to a straight line of the opponent's discs with one of your own discs at the far end — all sandwiched discs get flipped. If a player has no legal moves, they must pass. The game ends when both players pass consecutively.

This version plays on a hexagonal grid, adding a layer of strategic complexity beyond the classic square board.`;

function Othello() {
  const screenshots = ['/othello2.png', '/othello3.png', '/othello4.png'];

  return (
    <div className="othello-page">
      <h1 className="page-title"><span>Othello</span> Game</h1>
      <p className="page-subtitle">A hexagonal Reversi implementation built in Java.</p>

      <div className="othello-description">
        <h2>Game Overview</h2>
        <p>{DESCRIPTION}</p>
      </div>

      <div className="othello-screenshots">
        {screenshots.map((src, i) => (
          <div className="othello-img-wrap" key={i}>
            <img
              className="othello-img"
              src={process.env.PUBLIC_URL + src}
              alt={`Othello screenshot ${i + 2}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Othello;
