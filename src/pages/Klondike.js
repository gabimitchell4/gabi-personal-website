import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CsProject.css';

function Klondike() {
  const screenshots = ['/klondike1.png', '/klondike2.png', '/klondike3.png', '/klondike4.png'];

  return (
    <div className="csp-page">

      {/* ── Hero ── */}
      <div className="csp-hero">
        <span className="csp-eyebrow">Solo Project · Java · MVC · Data Structures</span>
        <h1 className="csp-title">Klondike Solitaire</h1>
        <p className="csp-tagline">Classic solitaire, built from scratch in Java with a clean MVC architecture.</p>
        <div className="csp-meta-row">
          <span className="csp-meta-tag">Java</span>
          <span className="csp-meta-tag">MVC Architecture</span>
          <span className="csp-meta-tag">Data Structures</span>
          <span className="csp-meta-tag">OOP</span>
        </div>
      </div>

      <div className="csp-body">

        {/* ── Overview ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">The Project</h2>
          <p className="csp-text">
            A fully playable implementation of Klondike Solitaire in Java, built without any
            external libraries. The game covers the complete standard ruleset: seven tableau
            columns, four foundation piles, a stock and waste pile, alternating-color card
            placement, and automatic win detection.
          </p>
          <p className="csp-text">
            The goal was to build a well-structured, testable implementation using
            Model-View-Controller architecture, keeping game logic cleanly separated from
            rendering and user input.
          </p>
        </section>

        {/* ── Architecture ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">Architecture</h2>
          <div className="csp-features">
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Model</div>
                <div className="csp-feature__desc">Manages all game state: the deck, tableau columns, foundation piles, stock, and waste. Exposes methods for valid moves only, enforcing all solitaire rules internally. State is immutable from outside the model.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">View</div>
                <div className="csp-feature__desc">Text-based renderer that draws the full board state to the console on every turn: foundation progress, visible tableau cards, and stock/waste state. Designed to be swappable with a GUI view without touching the model.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Controller</div>
                <div className="csp-feature__desc">Parses player input and translates it into model operations. Handles invalid commands gracefully, prompts re-entry, and detects the end-of-game state (win or no legal moves remaining).</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Logic ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">Key Implementation Details</h2>
          <div className="csp-features">
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Deck and Card Representation</div>
                <div className="csp-feature__desc">Cards are represented as immutable value objects with suit and rank. The deck is a shuffled list of 52 cards dealt into the tableau using the standard Klondike pyramid pattern, with remaining cards going to the stock.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Move Validation</div>
                <div className="csp-feature__desc">Every attempted move is validated before it mutates state. Tableau moves require alternating color and descending rank. Foundation moves require same suit and ascending rank from Ace. Invalid moves throw descriptive exceptions caught by the controller.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Win Detection</div>
                <div className="csp-feature__desc">The game checks after every move whether all four foundation piles are complete (Ace through King of the same suit). A separate check detects when no legal moves remain and the game is unwinnable, ending the session with a loss state.</div>
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
                <img src={process.env.PUBLIC_URL + src} alt={`Klondike screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Reflection ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">What I Learned</h2>
          <div className="csp-reflections">
            <div className="csp-reflection">
              <div className="csp-reflection__label">MVC in Practice</div>
              <p className="csp-text">Separating model, view, and controller felt abstract until I had to change the rendering without touching the game logic. Clean architecture made that change trivial, which made the value of the pattern concrete.</p>
            </div>
            <div className="csp-reflection">
              <div className="csp-reflection__label">Defensive Design</div>
              <p className="csp-text">Designing the model to reject invalid operations rather than silently accepting them made the controller much simpler to write. Pushing validation down to the lowest level meant the rest of the system could trust the model unconditionally.</p>
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

export default Klondike;
