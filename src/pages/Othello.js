import React from 'react';
import '../styles/Othello.css';

function Othello() {
    const imagePath5 =  '/othello2.png';
    const imagePath6 =  '/othello3.png';
    const imagePath7 =  '/othello4.png';
  
    return (
      <>
      <h1>Othello Game</h1>
      <h2> + GAME OVERVIEW +</h2>

<p>This code is creating Reversi, a two-player game played on a regular grid of cells.
Each player has a color—black or white—and the game pieces are discs colored black on
one side and white on the other. Game play begins with equal numbers of both colors of discs
arranged in the middle of the grid. In our game, our grid will be made up of hexagons.

model.Player Black moves first. On each turn, a player may do one of two things:
- They may pass, and let the other player move.
- They may select a legal empty cell and play a disc in that cell.

A play is legal for player A if the disc being played is adjacent1 (in at least one direction)
to a straight line of the opponent player B’s discs, at the far end of which is another player A
disc. The result of a legal move is that all of player B’s discs in all directions that are
sandwiched between two discs of player A get flipped to player A.
We say that player A has captured player B’s discs.

If a player has no legal moves, they are required to pass.

If both players pass in a row, the game ends.</p>
      <div className = "gameImages">
            <div className = "othelloView">
            <img className="project" src={process.env.PUBLIC_URL + imagePath5} alt="Bullet Journal" />
            </div>
            <div className = "othelloView">
            <img className="project" src={process.env.PUBLIC_URL + imagePath6} alt="Bullet Journal" />
            </div>
            <div className = "othelloView">
            <img className="project" src={process.env.PUBLIC_URL + imagePath7} alt="Bullet Journal" />
            </div>
            <p>Description of your project goes here.</p>
        </div>
       </>
       
    );
  }
  
  export default Othello;