import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CsProject.css';

function Othello() {
  const screenshots = ['/othello1.png', '/othello2.png', '/othello3.png', '/othello4.png'];

  return (
    <div className="csp-page">

      {/* ── Hero ── */}
      <div className="csp-hero">
        <span className="csp-eyebrow">Solo Project · Java · OOP · Game Logic</span>
        <h1 className="csp-title">Othello</h1>
        <p className="csp-tagline">Reversi on a hexagonal grid, built in Java with full game logic and a custom board renderer.</p>
        <div className="csp-meta-row">
          <span className="csp-meta-tag">Java</span>
          <span className="csp-meta-tag">OOP</span>
          <span className="csp-meta-tag">Game Logic</span>
          <span className="csp-meta-tag">Algorithms</span>
        </div>
      </div>

      <div className="csp-body">

        {/* ── Overview ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">The Project</h2>
          <p className="csp-text">
            A complete implementation of Reversi (Othello) in Java, played on a hexagonal grid
            instead of the classic square board. The hex grid adds a layer of strategic complexity:
            each cell has six neighbors instead of eight, which changes which lines of discs can
            be captured and forces players to think differently about territory.
          </p>
          <p className="csp-text">
            The project covers the full game: legal move detection, disc flipping, pass-turn logic,
            end-of-game detection, and a custom text-based board renderer that draws the hex grid
            correctly in the terminal.
          </p>
        </section>

        {/* ── The Game ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">How It Works</h2>
          <div className="csp-features">
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Legal Move Detection</div>
                <div className="csp-feature__desc">A move is legal if the placed disc is adjacent to at least one straight line of opponent discs capped by your own disc. The implementation checks all six hex directions from the candidate cell and validates each line independently.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Disc Flipping</div>
                <div className="csp-feature__desc">After a legal move is placed, all sandwiched opponent discs across all valid directions are flipped simultaneously. The flipping algorithm traverses each valid line and mutates the board state in one atomic operation.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Pass and End Conditions</div>
                <div className="csp-feature__desc">If a player has no legal moves, they must pass. The game ends when both players pass consecutively. Final score is the disc count of each color; the player with more wins.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Hexagonal Grid Renderer</div>
                <div className="csp-feature__desc">Drawing a hex grid in a terminal requires offset rows and careful character spacing. Built a custom renderer that outputs the board with correct hex topology, showing disc colors and empty cells in a readable layout.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Screenshots ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">Screenshots</h2>
          <div className="csp-screenshots">
            {screenshots.map((src, i) => (
              <div className="csp-screenshot" key={i}>
                <img src={process.env.PUBLIC_URL + src} alt={`Othello screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Reflection ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">What I Learned</h2>
          <div className="csp-reflections">
            <div className="csp-reflection">
              <div className="csp-reflection__label">Coordinate Systems</div>
              <p className="csp-text">Hexagonal grids require a different coordinate system than square grids. Working through cube coordinates and how to map them to axial coordinates for storage made me think carefully about representation choices and their downstream effects on the move algorithm.</p>
            </div>
            <div className="csp-reflection">
              <div className="csp-reflection__label">Separating State from Logic</div>
              <p className="csp-text">Keeping the board state as a pure data structure and putting all game logic in separate classes made the system easier to test and reason about. I could write tests against the board state directly without needing to simulate full game sequences.</p>
            </div>
          </div>
        </section>

      </div>

      <div className="csp-back-row">
        <Link to="/" className="csp-back-link">← Back to Work</Link>
      </div>

    </div>
  );
}

export default Othello;
