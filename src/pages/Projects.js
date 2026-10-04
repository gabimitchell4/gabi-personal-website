import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const projects = [
  {
    id: "nutriguide",
    type: "Product Design · Health Tech · Mobile",
    name: "NutriGuide",
    desc: "Capstone project. A mobile app that scans nutrition labels and returns a personalized score calibrated to your goals, allergies, and health profile. Driven by a survey of 32 people and competitive analysis of Yuka, MyFitnessPal, and Fooducate. The core insight: a universal score will always fail someone. The same granola bar scores 12 for someone managing blood pressure and 88 for an active athlete.",
    link: "/nutriguide",
    panelColor: "#dde8e0",
    panelType: "phone",
    image: "/nutriguide/ng-design-5.png",
  },
  {
    id: "felt",
    type: "Physical Design · UX Research · Wellness",
    name: "FELT",
    desc: "A physical prompt card deck for mindful movement. Three decks guide a before, during, and weekly practice designed to replace performance metrics with felt experience. Built in response to how fitness apps like Strava and Apple Fitness reduce movement to data. Tested with three users across four design iterations.",
    link: "/felt",
    panelColor: "#1e3c28",
    panelType: "felt",
  },
  {
    id: "dailyduel",
    type: "TypeScript · React · Full-Stack · Group Project",
    name: "Daily Duel",
    desc: "A competitive daily puzzle platform built in a team of four for CS 4530. I led the UI revamp, built the maze game frontend and arrow-key navigation from scratch, designed the badge system end-to-end, built the daily results DB and API, incorporated accessibility checks into the CI/CD pipeline, and wrote the Playwright e2e and Vitest test suites.",
    link: "/dailyduel",
    panelColor: "#1a2340",
    panelType: "image",
    image: "/dailyduel-home.png",
  },
  {
    id: "othello",
    type: "Java · OOP · Algorithms",
    name: "Othello",
    desc: "Reversi on a hexagonal grid, built in Java from scratch. Implements legal move detection across all six hex directions, disc flipping, pass-turn logic, end-of-game detection, and a custom terminal renderer that draws the hex board correctly. The hex grid makes the move algorithm meaningfully harder than the classic square version.",
    link: "/othello",
    panelColor: "#b8714a",
    panelType: "image",
    image: "/othello1.png",
  },
  {
    id: "klondike",
    type: "Java · MVC · Data Structures",
    name: "Klondike Solitaire",
    desc: "Fully playable Klondike Solitaire in Java, no external libraries. Covers the complete ruleset: seven tableau columns, four foundation piles, stock and waste, alternating-color placement, and win and loss detection. Built with strict MVC separation so the game logic, view, and controller are independently testable.",
    link: "/klondike",
    panelColor: "#c8a870",
    panelType: "image",
    image: "/klondike2.png",
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <p className="projects-eyebrow">Selected work</p>
        <h1 className="projects-heading">Things I've built</h1>
        <p className="projects-intro">
          A mix of product design and software engineering.
        </p>
      </header>
      <section className="home-work">
        {projects.map((proj) => {
          const inner = (
            <article className="work-item">
              <div
                className="work-panel"
                style={{ background: proj.panelColor }}
              >
                {proj.panelType === "phone" && proj.image && (
                  <img
                    className="work-panel__phone"
                    src={process.env.PUBLIC_URL + proj.image}
                    alt={proj.name}
                  />
                )}
                {proj.panelType === "felt" && (
                  <div className="work-panel__felt-card">
                    <div className="work-panel__felt-label">BEFORE</div>
                    <div className="work-panel__felt-rule" />
                    <p className="work-panel__felt-prompt">
                      What does your body feel like it needs right now?
                    </p>
                  </div>
                )}
                {proj.panelType === "image" && proj.image && (
                  <img
                    className={`work-panel__img ${proj.id === "dailyduel" ? "work-panel__img--dailyduel" : ""}`}
                    src={process.env.PUBLIC_URL + proj.image}
                    alt={proj.name}
                  />
                )}
              </div>
              <div className="work-info">
                <p className="work-type">{proj.type}</p>
                <h2 className="work-name">{proj.name}</h2>
                <p className="work-desc">{proj.desc}</p>
                <span className="work-cta">View project →</span>
              </div>
            </article>
          );

          return (
            <Link to={proj.link} className="work-item-link" key={proj.id}>
              {inner}
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
