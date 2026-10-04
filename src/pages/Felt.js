import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Felt.css';

const beforeCards = [
  "Where do you feel tension in your body right now?",
  "What does your breath sound like?",
  "What are you carrying into this movement?",
  "What does your body feel like it needs right now?",
  "What are your intentions for today's movement?",
];

const afterCards = [
  "What is surprising your body right now?",
  "What felt most challenging about today's movement?",
  "How does your breath sound now?",
  "How would you describe the quality of today's movement?",
  "What are you most proud of for today's movement?",
];

const weeklyCards = [
  "What did your body get better at this week?",
  "When did movement feel like a chore? When did it feel like a gift?",
  "Did you rest when you needed to, or did you push through? What made you choose?",
  "What is one thing from this week's movement you're carrying into next week?",
  "How did it feel this week to work out without tracking it?",
];

function CardDeck({ type, cards, color, label }) {
  const [idx, setIdx] = useState(0);

  return (
    <div className="felt-deck">
      <div
        className="felt-card"
        style={{ background: color }}
        onClick={() => setIdx((idx + 1) % cards.length)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setIdx((idx + 1) % cards.length)}
        aria-label="Next card"
      >
        <div className="felt-card__label">{label}</div>
        <div className="felt-card__rule" />
        <p className="felt-card__prompt">{cards[idx]}</p>
      </div>
      <p className="felt-deck__hint">Click to draw another card · {idx + 1}/{cards.length}</p>
    </div>
  );
}

function Felt() {
  return (
    <div className="felt-page">

      {/* ── Hero ── */}
      <div className="felt-hero">
        <span className="felt-eyebrow">Design Project · Solo · Physical Product Design</span>
        <h1 className="felt-title">FELT</h1>
        <p className="felt-tagline">A ritual practice for felt movement.</p>
        <div className="felt-meta-row">
          <span className="felt-meta-tag">Physical Design</span>
          <span className="felt-meta-tag">UX Research</span>
          <span className="felt-meta-tag">Wellness</span>
          <span className="felt-meta-tag">User Testing</span>
        </div>
      </div>

      <div className="felt-body">

        {/* ── The Problem ── */}
        <section className="felt-section">
          <h2 className="felt-section-heading">The Problem</h2>
          <p className="felt-text">
            Fitness apps like Strava, Apple Fitness, and Nike Run Club have fundamentally
            changed how we experience moving our bodies. They measure pace, calories, heart
            rate zones, and streaks. They send notifications when we perform well, and they
            display our body's movements to friends and followers. They rank us against
            others and past versions of ourselves.
          </p>
          <p className="felt-text">
            The result is a subtle but significant shift: the experience of exercising is
            slowly being replaced by the experience of <em>performing for an algorithm</em>.
            Movement, which the body has done long before metrics existed, becomes data.
          </p>
          <blockquote className="felt-pullquote">
            What if a tool focused entirely on the body's felt experience, not the numbers?
            What would it mean to design for presence, not performance?
          </blockquote>
        </section>

        {/* ── Design Concepts ── */}
        <section className="felt-section">
          <h2 className="felt-section-heading">Conceptual Framework</h2>
          <div className="felt-concepts">
            <div className="felt-concept">
              <div className="felt-concept__label">Embodiment</div>
              <p className="felt-text">
                Fitness apps treat the body as a data source rather than an authority.
                Every card in FELT is designed to make the body the sensor: felt tension,
                felt breath, felt quality of movement.
              </p>
            </div>
            <div className="felt-concept">
              <div className="felt-concept__label">Biocost</div>
              <p className="felt-text">
                Every interaction has a cost to the body. Fitness tracking creates a
                compulsive biocost: constantly checking your phone pulls attention away
                from physical experience towards abstraction. FELT reverses this: drawing
                a card <em>before</em> movement forces the user to slow down and arrive.
              </p>
            </div>
            <div className="felt-concept">
              <div className="felt-concept__label">Temporal Design</div>
              <p className="felt-text">
                The card structure is explicitly temporal: Arrive, Move, Return. Each phase
                operates on a different time scale. The weekly ritual adds an additional
                layer, the accumulation of practice across many days.
              </p>
            </div>
          </div>
        </section>

        {/* ── The Design ── */}
        <section className="felt-section">
          <h2 className="felt-section-heading">The Design · A Physical Card Deck</h2>
          <p className="felt-text">
            FELT is a physical prompt card deck organized around three movements of the
            ritual. There are no screens. There is nothing to check.
          </p>
          <div className="felt-ritual">
            <div className="felt-ritual__step">
              <div className="felt-ritual__num felt-ritual__num--before">I</div>
              <div className="felt-ritual__body">
                <div className="felt-ritual__title">Arrive</div>
                <div className="felt-ritual__desc">Draw a dark green card before movement. Read it, sit with it for 30 seconds. No response required; the card is intended to open attention and create presence.</div>
              </div>
            </div>
            <div className="felt-ritual__step">
              <div className="felt-ritual__num felt-ritual__num--move">II</div>
              <div className="felt-ritual__body">
                <div className="felt-ritual__title">Move</div>
                <div className="felt-ritual__desc">Move. Leave the cards behind.</div>
              </div>
            </div>
            <div className="felt-ritual__step">
              <div className="felt-ritual__num felt-ritual__num--after">III</div>
              <div className="felt-ritual__body">
                <div className="felt-ritual__title">Return</div>
                <div className="felt-ritual__desc">Draw a brown card after movement. These are reflection prompts, not evaluations. They focus on the felt experience, not numbers.</div>
              </div>
            </div>
            <div className="felt-ritual__step">
              <div className="felt-ritual__num felt-ritual__num--weekly">↻</div>
              <div className="felt-ritual__body">
                <div className="felt-ritual__title">Weekly</div>
                <div className="felt-ritual__desc">Once a week, draw a teal card and reflect on the full week of movement. These require more distance and accumulation to land.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Card Demo ── */}
        <section className="felt-section">
          <h2 className="felt-section-heading">The Cards · Draw One</h2>
          <p className="felt-text">The actual prompts, rendered as they appear in the physical deck.</p>
          <div className="felt-decks">
            <CardDeck type="before" cards={beforeCards} color="#1e3c28" label="BEFORE" />
            <CardDeck type="after"  cards={afterCards}  color="#2a1508" label="AFTER"  />
            <CardDeck type="weekly" cards={weeklyCards} color="#3d7a52" label="WEEKLY" />
          </div>
        </section>

        {/* ── Design Decisions ── */}
        <section className="felt-section">
          <h2 className="felt-section-heading">Design Decisions</h2>
          <div className="felt-decisions">
            <div className="felt-decision">
              <div className="felt-decision__q">Why a physical card deck?</div>
              <p className="felt-text">
                A card deck is anti-interface. You cannot receive a notification from it.
                There is nothing to check mid-run; it is static. It requires the user to
                slow down, hold it, and reflect.
              </p>
            </div>
            <div className="felt-decision">
              <div className="felt-decision__q">Why prompts instead of writing responses?</div>
              <p className="felt-text">
                Prompts are open-ended and use emotions rather than data. There are no right
                answers. The reason to think the answers rather than write them down is that
                writing creates a record, which feels like tracking again.
              </p>
            </div>
            <div className="felt-decision">
              <div className="felt-decision__q">Why cards before, after, and weekly?</div>
              <p className="felt-text">
                They each play different roles in centering the user. Together, they create a
                practice that unfolds across multiple time scales: the individual session and
                the accumulated week.
              </p>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="felt-section">
          <h2 className="felt-section-heading">Process · Four Versions</h2>
          <div className="felt-versions">
            <div className="felt-version">
              <div className="felt-version__num">V1</div>
              <div className="felt-version__body">
                <div className="felt-version__title">App concept</div>
                <p className="felt-text">The first instinct was to build an app for recording feelings. Abandoned quickly; using a phone to escape phone-mediated fitness seemed counterintuitive.</p>
              </div>
            </div>
            <div className="felt-version">
              <div className="felt-version__num">V2</div>
              <div className="felt-version__body">
                <div className="felt-version__title">Journal format</div>
                <p className="felt-text">A personal journal would support deep reflection, but felt less facilitated and harder to excite people who don't already journal.</p>
              </div>
            </div>
            <div className="felt-version">
              <div className="felt-version__num">V3</div>
              <div className="felt-version__body">
                <div className="felt-version__title">Ritual cards as action steps</div>
                <p className="felt-text">Cards included multi-step instructions like "do X workouts without a tracker this week." Peer feedback: too prescriptive. Created performance anxiety around doing the ritual correctly.</p>
              </div>
            </div>
            <div className="felt-version felt-version--current">
              <div className="felt-version__num">V4</div>
              <div className="felt-version__body">
                <div className="felt-version__title">Current · Reflective prompts only</div>
                <p className="felt-text">Cards are questions, not instructions. Users think about their responses and let the question marinate throughout movement. No prescribed actions.</p>
              </div>
            </div>
          </div>
          <div className="felt-naming">
            <div className="felt-naming__label">Name evolution</div>
            <div className="felt-naming__steps">
              <span className="felt-naming__step felt-naming__step--dead">Anti-Fitness Tracker</span>
              <span className="felt-naming__arrow">→</span>
              <span className="felt-naming__step felt-naming__step--dead">Body Checker</span>
              <span className="felt-naming__arrow">→</span>
              <span className="felt-naming__step felt-naming__step--final">FELT</span>
            </div>
            <p className="felt-text">
              "Anti-Fitness Tracker" sounded like it was against fitness. "Body Checker"
              carried unintended negative connotations. FELT names the experience itself:
              the felt body, the felt movement.
            </p>
          </div>
        </section>

        {/* ── Testing ── */}
        <section className="felt-section">
          <h2 className="felt-section-heading">User Testing · Three Sessions</h2>
          <div className="felt-tests">
            <div className="felt-test">
              <div className="felt-test__who">Roommate · Casual exerciser</div>
              <p className="felt-text">
                Drew "What are you carrying into this movement?" before a run. Reported the
                question stayed with her for the first ten minutes and she found herself
                returning to it throughout.
              </p>
              <div className="felt-test__finding">
                <span className="felt-test__finding-label">Change made:</span> The After card felt
                awkward immediately post-exercise while still catching her breath. Removed
                "immediately" from instructions; users now choose their own timing.
              </div>
            </div>
            <div className="felt-test">
              <div className="felt-test__who">Sister · Regular gym-goer, Strava user</div>
              <p className="felt-text">
                Initially skeptical (said Strava was her favorite social media app). Drew
                "How did it feel this week to workout without tracking it?" and realized
                she had no memory of how her body felt during any workout that week.
              </p>
              <div className="felt-test__quote">"Kind of uncomfortable."</div>
              <div className="felt-test__finding">
                This was the intended effect. Confirmed the core argument was landing even
                with the most resistant user.
              </div>
            </div>
            <div className="felt-test">
              <div className="felt-test__who">Friend · Student athlete</div>
              <p className="felt-text">
                Had done a full week of workouts without her Garmin. Intuitively shuffled
                the deck, drew "What did your body get better at this week?" and paused
                for a while before responding. Said it felt strange thinking about the week
                as a whole; she had never done this for workouts before.
              </p>
              <div className="felt-test__finding">
                Confirmed the weekly card requires more distance and familiarity to land.
                It works best once the user has already built a practice.
              </div>
            </div>
          </div>
        </section>

      </div>

      <div className="felt-back-row">
        <Link to="/" className="felt-back-link">← Back to Work</Link>
      </div>

    </div>
  );
}

export default Felt;
