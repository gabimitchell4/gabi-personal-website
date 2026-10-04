import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import headshotImg from "../assets/headshot.png";

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

const selectedProjects = [
  {
    ...projects[0],
    summary:
      "A mobile app that scans nutrition labels and returns a personalized score calibrated to each person's goals, allergies, and health profile.",
  },
  {
    ...projects[1],
    summary:
      "A physical prompt card deck for mindful movement, designed to replace performance metrics with felt experience.",
  },
  {
    ...projects[2],
    summary:
      "A competitive daily puzzle platform where I led the UI revamp, maze frontend, badge system, and testing.",
  },
];

function ProjectVisual({ project }) {
  return (
    <div
      className="selected-work__visual"
      style={{ background: project.panelColor }}
    >
      {project.panelType === "phone" && (
        <img
          className="selected-work__phone"
          src={process.env.PUBLIC_URL + project.image}
          alt=""
        />
      )}
      {project.panelType === "felt" && (
        <div className="selected-work__felt-card">
          <div className="work-panel__felt-label">BEFORE</div>
          <div className="work-panel__felt-rule" />
          <p>What does your body feel like it needs right now?</p>
        </div>
      )}
      {project.panelType === "image" && (
        <img
          className="selected-work__image"
          src={process.env.PUBLIC_URL + project.image}
          alt=""
        />
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__text">
          <h1 className="home-heading">Hey, I'm Gabriella</h1>
          <p className="home-bio">
            Software engineer with a product mindset. I build thoughtful digital
            products at the intersection of technology, design, and people.
            <br />
            <br />I enjoy taking ideas from early concepts to polished, shipped
            products, with a particular interest in health, wellness, and
            products that make people's lives better.{" "}
            <a
              href="/resume.pdf"
              className="home-inline-link"
              download="Gabi_Mitchell_Resume.pdf"
            >
              View my resume
            </a>{" "}
            or{" "}
            <a
              href="mailto:Mitchell.g@northeastern.edu"
              className="home-inline-link"
            >
              say hello
            </a>
            .
          </p>
        </div>
        <img className="home-headshot" src={headshotImg} alt="Gabi Mitchell" />
        <div className="home-scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <span className="home-scroll-cue__arrow">↓</span>
        </div>
      </section>

      <section
        className="selected-work"
        aria-labelledby="selected-work-heading"
      >
        <div className="section-heading-row">
          <div>
            <p className="section-eyebrow">Selected work</p>
            <h2 className="section-heading" id="selected-work-heading">
              A few things I've built.
            </h2>
          </div>
          <Link to="/projects" className="section-link">
            See all projects →
          </Link>
        </div>

        <div className="selected-work__list">
          {selectedProjects.map((project, index) => (
            <Link
              to={project.link}
              className={`selected-work__item${index === 0 ? " selected-work__item--featured" : ""}`}
              key={project.id}
            >
              <ProjectVisual project={project} />
              <div className="selected-work__info">
                <p className="selected-work__type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="selected-work__summary">{project.summary}</p>
                <span className="selected-work__cta">View project →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="life-preview" aria-labelledby="life-preview-heading">
        <div className="life-preview__copy">
          <p className="section-eyebrow">Outside of work</p>
          <h2 className="section-heading" id="life-preview-heading">
            A life beyond the screen.
          </h2>
          <p>
            After graduating, I spent five months solo backpacking through
            Southeast Asia. When I'm not building things, I'm usually practicing
            yoga, running, discovering a new café, or planning my next
            adventure.
          </p>
          <Link to="/life" className="section-link">
            Explore Life →
          </Link>
        </div>
        <div className="life-preview__images">
          <img
            src={`${process.env.PUBLIC_URL}/life/balloons.jpg`}
            alt="Golden balloons at sunset in Thailand"
          />
          <img
            src={`${process.env.PUBLIC_URL}/life/vietnam-ninh-binh.jpg`}
            alt="Landscape in Ninh Binh, Vietnam"
          />
          <img
            src={`${process.env.PUBLIC_URL}/life/yoga-studio.jpg`}
            alt="Yoga studio in Southeast Asia"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
