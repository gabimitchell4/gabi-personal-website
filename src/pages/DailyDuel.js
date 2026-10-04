import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CsProject.css';

function DailyDuel() {
  return (
    <div className="csp-page">

      {/* ── Hero ── */}
      <div className="csp-hero">
        <span className="csp-eyebrow">Group Project · 4 People · TypeScript · React · Full-Stack</span>
        <h1 className="csp-title">Daily Duel</h1>
        <p className="csp-tagline">A competitive daily puzzle platform. Play, compare, and beat your friends.</p>
        <div className="csp-meta-row">
          <span className="csp-meta-tag">TypeScript</span>
          <span className="csp-meta-tag">React</span>
          <span className="csp-meta-tag">Node.js</span>
          <span className="csp-meta-tag">Full-Stack</span>
          <span className="csp-meta-tag">Playwright</span>
        </div>
      </div>

      <div className="csp-body">

        {/* ── Overview ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">The Project</h2>
          <p className="csp-text">
            Daily Duel is a web app where players tackle a new maze puzzle each day and compete
            against friends on a shared leaderboard. Built over a semester in a team of four for
            CS 4530 (Foundations of Software Engineering) at Northeastern, the project extends a
            course-provided TypeScript/React/Node.js codebase with new features designed, built,
            and tested by our team.
          </p>
          <p className="csp-text">
            I led the design and was a primary contributor to the frontend, building the game UI
            from scratch, designing the badge and social systems, and writing the end-to-end
            and unit test suites.
          </p>
        </section>

        {/* ── Stack ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">Tech Stack</h2>
          <div className="csp-stack">
            <span className="csp-stack-chip">TypeScript</span>
            <span className="csp-stack-chip">React</span>
            <span className="csp-stack-chip">Node.js</span>
            <span className="csp-stack-chip">Express</span>
            <span className="csp-stack-chip">MongoDB</span>
            <span className="csp-stack-chip">Playwright</span>
            <span className="csp-stack-chip">Vitest</span>
            <span className="csp-stack-chip">CSS Modules</span>
          </div>
        </section>

        {/* ── My Contributions ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">What I Built</h2>
          <div className="csp-features">
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Maze Game Frontend</div>
                <div className="csp-feature__desc">Built the entire maze game UI from scratch in React. Rendered the grid, player position, path state, and win/loss conditions. Designed the visual language for the maze cells including walls, open paths, the player token, and the goal tile.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Arrow Key Navigation</div>
                <div className="csp-feature__desc">Implemented keyboard-driven movement through the maze using arrow keys, replacing the initial click-based approach. Added event listeners and move validation so illegal moves are silently rejected without breaking game state.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Daily Game UI</div>
                <div className="csp-feature__desc">Designed and built the daily game flow: countdown to next puzzle, result display after completion, and the privacy logic that prevents players from seeing other users' daily results before they play. Built the finished game summary screen showing time, moves, and a shareable snippet.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Badge System</div>
                <div className="csp-feature__desc">Designed and implemented the badge system end-to-end: defined badge types and criteria, built the backend logic to award badges on game completion, and built the frontend badge display on user profiles. Badges reward streaks, fast completions, and first-time milestones.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Game-Share Messaging</div>
                <div className="csp-feature__desc">Built the social sharing feature that lets players send their daily result to friends within the app. Designed the message format and built the UI for composing and viewing result shares, including a copy-to-clipboard button for external sharing.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Daily Results DB & API</div>
                <div className="csp-feature__desc">Designed and implemented the database schema and REST API for storing daily game results per user. Built the backend endpoints for submitting results, retrieving a user's history, and querying the leaderboard, with privacy logic that blocks users from seeing others' results before they play.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">UI Revamp</div>
                <div className="csp-feature__desc">Led a visual overhaul of the app's interface mid-project: standardized the color system, tightened spacing and typography, and redesigned core components to be more consistent and polished. Introduced a default theme applied on first render so new users always land in a clean state.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Accessibility CI/CD</div>
                <div className="csp-feature__desc">Incorporated automated accessibility checks into the CI/CD pipeline so every pull request is validated against WCAG standards before merge. This made accessibility a continuous requirement rather than an afterthought, catching issues at the PR level before they reached main.</div>
              </div>
            </div>
            <div className="csp-feature">
              <div className="csp-feature__icon">◎</div>
              <div>
                <div className="csp-feature__title">Testing: Playwright + Vitest</div>
                <div className="csp-feature__desc">Wrote the Playwright end-to-end test suite covering the full maze game flow and leaderboard, and Vitest unit tests for game logic and component behavior. Fixed flaky tests by identifying and eliminating async timing issues in the leaderboard test suite.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Screenshot ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">The App</h2>
          <div className="csp-screenshot">
            <img src="/dailyduel-home.png" alt="Daily Duel home screen" />
          </div>
        </section>

        {/* ── Design callout ── */}
        <section className="csp-section">
          <div className="csp-callout">
            A competitive puzzle app lives or dies on how good it feels to play. I made sure the
            game UI felt immediate, readable, and satisfying to navigate with just a keyboard.
          </div>
        </section>

        {/* ── Reflection ── */}
        <section className="csp-section">
          <h2 className="csp-section-heading">What I Learned</h2>
          <div className="csp-reflections">
            <div className="csp-reflection">
              <div className="csp-reflection__label">Team Engineering</div>
              <p className="csp-text">Working across four developers on a shared TypeScript codebase required real coordination: PR reviews, merge conflict resolution, and agreeing on interfaces before implementation. I got comfortable with the full pull request lifecycle on a team with real code velocity.</p>
            </div>
            <div className="csp-reflection">
              <div className="csp-reflection__label">Testing at Scale</div>
              <p className="csp-text">Writing e2e tests with Playwright taught me how fragile UI tests can be around async state. Debugging flaky tests by understanding the timing of server responses and React re-renders was some of the most careful thinking I did on this project.</p>
            </div>
            <div className="csp-reflection">
              <div className="csp-reflection__label">Accessibility as Infrastructure</div>
              <p className="csp-text">Adding accessibility checks to CI/CD shifted how the whole team thought about a11y. Instead of reviewing for it in code review or auditing at the end, violations became blocking failures on every PR. That cultural shift was as valuable as the tooling itself.</p>
            </div>
            <div className="csp-reflection">
              <div className="csp-reflection__label">Design in a Codebase You Didn't Start</div>
              <p className="csp-text">The course scaffold gave us a working app with existing visual patterns. The design challenge was extending it coherently so that the features I added felt native, not bolted on. That constraint made me a more deliberate designer.</p>
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

export default DailyDuel;
