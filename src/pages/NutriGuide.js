import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NutriGuide.css';

const surveyData = [
  { label: 'Protein',        pct: 87.5, n: 28 },
  { label: 'Sugar',          pct: 78.1, n: 25 },
  { label: 'Calories',       pct: 71.9, n: 23 },
  { label: 'Fiber',          pct: 43.8, n: 14 },
  { label: 'Carbohydrates',  pct: 18.8, n: 6  },
  { label: 'Micronutrients', pct: 15.6, n: 5  },
];

const ScoreCard = ({ initial, name, age, gender, condition, score, variant, reasons }) => (
  <div className={`ng-card ng-card--${variant}`}>
    <div className="ng-card__top">
      <div className="ng-card__avatar">{initial}</div>
      <div className="ng-card__condition">{condition}</div>
    </div>
    <div className="ng-card__name">{name}</div>
    <div className="ng-card__demo">{age} · {gender}</div>
    <div className={`ng-card__score ng-card__score--${variant}`}>
      {score}<span className="ng-card__denom">/100</span>
    </div>
    {reasons && (
      <ul className="ng-card__reasons">
        {reasons.map(r => <li key={r}>{r}</li>)}
      </ul>
    )}
  </div>
);

function NutriGuide() {
  return (
    <div className="ng-page">

      {/* ── Hero ── */}
      <div className="ng-hero">
        <span className="ng-eyebrow">Capstone Project · Solo · Product Design + Mobile</span>
        <h1 className="ng-title">NutriGuide</h1>
        <p className="ng-tagline">Scan Smarter. Eat With Intention.</p>
        <div className="ng-meta-row">
          <span className="ng-meta-tag">Product Design</span>
          <span className="ng-meta-tag">Mobile App</span>
          <span className="ng-meta-tag">User Research</span>
          <span className="ng-meta-tag">Health Tech</span>
        </div>
      </div>

      <div className="ng-body">

        {/* ── Research Question ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">The Question</h2>
          <p className="ng-pullquote">
            How can design improve visual clarity and direct consumer attention,
            leading to increased nutrition awareness and support healthier decision-making?
          </p>
        </section>

        {/* ── The Problem ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">The Problem</h2>
          <p className="ng-text">
            Most people don't understand what's in the food they eat. The tools
            that exist to educate them either overwhelm, oversimplify, or require
            too much effort.
          </p>
          <div className="ng-stat-row">
            <div className="ng-stat">
              <div className="ng-stat__number">72%</div>
              <div className="ng-stat__label">of Americans don't understand the recommended levels of salt, fat, and sugar they should be consuming</div>
            </div>
            <div className="ng-stat">
              <div className="ng-stat__number">28%</div>
              <div className="ng-stat__label">say they confidently understand food labels</div>
            </div>
          </div>
        </section>

        {/* ── Survey ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">Research · Survey · 32 Responses</h2>
          <p className="ng-text">
            Before designing, I surveyed 32 people to understand how they actually
            interact with nutrition labels. The results revealed something important:
            people prioritize wildly different things.
          </p>
          <p className="ng-chart-label">What do people look for on a label?</p>
          <div className="ng-survey-bars">
            {surveyData.map(d => (
              <div className="ng-bar-row" key={d.label}>
                <div className="ng-bar-label">{d.label}</div>
                <div className="ng-bar-track">
                  <div className="ng-bar-fill" style={{ width: `${d.pct}%` }} />
                </div>
                <div className="ng-bar-value">{d.pct}%</div>
              </div>
            ))}
          </div>
          <p className="ng-text">
            Protein (87.5%), sugar (78.1%), and calories (71.9%) topped the list:
            each reflecting entirely different goals: muscle building, weight management,
            energy tracking. This diversity became the core signal that a universal
            score would always fail someone.
          </p>
        </section>

        {/* ── Competitive Analysis ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">Competitive Analysis</h2>
          <p className="ng-text ng-text--em">Existing apps all make the same mistake.</p>
          <div className="ng-competitors">
            <div className="ng-competitor">
              <div className="ng-competitor__name">Yuka</div>
              <div className="ng-competitor__flaw">
                Assumes "health" is universal; the same score works for everyone.
                Doesn't account for athletic performance, dietary restrictions, or chronic conditions.
              </div>
            </div>
            <div className="ng-competitor">
              <div className="ng-competitor__name">MyFitnessPal</div>
              <div className="ng-competitor__flaw">
                Assumes calories and macros alone are enough. Focuses heavily on
                one number without considering individual goals, medical conditions,
                or ingredient quality.
              </div>
            </div>
            <div className="ng-competitor">
              <div className="ng-competitor__name">Fooducate</div>
              <div className="ng-competitor__flaw">
                A letter grade (A–D) can't represent overall healthiness. Grades
                don't consider user-specific goals like low sugar vs. high micronutrients.
              </div>
            </div>
          </div>
          <div className="ng-insight-block">
            People struggle to understand nutrition labels and make choices that fit their personal health goals. Current apps overlook individual differences in both knowledge and priorities, providing generic guidance that doesn't support informed decisions.
          </div>
        </section>

        {/* ── User Personas ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">User Personas · Three People. Three Different Needs.</h2>
          <div className="ng-personas">
            <div className="ng-persona">
              <div className="ng-persona__name">Helen</div>
              <div className="ng-persona__detail">42 · Office Manager · Chicago, IL</div>
              <p className="ng-persona__bio">
                Recently learned she has high blood pressure. Trying to improve her heart
                health by monitoring sodium and fat; it's the first time in her life she's
                had to pay attention to what she eats. Prefers simple, actionable guidance.
              </p>
              <div className="ng-persona__tag ng-persona__tag--goal">Goal: reduce sodium, cook healthier for her family</div>
              <div className="ng-persona__tag ng-persona__tag--barrier">Barrier: existing tools aren't tailored to heart health</div>
            </div>
            <div className="ng-persona">
              <div className="ng-persona__name">Alex</div>
              <div className="ng-persona__detail">27 · Personal Trainer · Austin, TX</div>
              <p className="ng-persona__bio">
                Works out and tracks his diet, but struggles to support muscle-building goals
                while staying convenient. Active, gym-focused, values efficiency and measurable
                results. Enjoys meal prepping and eating protein-rich foods.
              </p>
              <div className="ng-persona__tag ng-persona__tag--goal">Goal: optimize protein for muscle recovery; find fast high-protein snacks</div>
              <div className="ng-persona__tag ng-persona__tag--barrier">Barrier: no time to analyze labels at the store</div>
            </div>
            <div className="ng-persona">
              <div className="ng-persona__name">Beth</div>
              <div className="ng-persona__detail">21 · College Student · Boston, MA</div>
              <p className="ng-persona__bio">
                Vegetarian, conscious about her family's history of diabetes. Loves cooking
                and trying new foods, but finds herself overwhelmed and going down rabbit
                holes about what she should be eating. Juggles school, work, and social life.
              </p>
              <div className="ng-persona__tag ng-persona__tag--goal">Goal: maintain energy, prevent diabetes onset, build lifelong healthy habits</div>
              <div className="ng-persona__tag ng-persona__tag--barrier">Barrier: current apps are generic</div>
            </div>
          </div>
        </section>

        {/* ── Design Process ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">Design Process · How It Evolved</h2>
          <p className="ng-text">
            The project didn't start as an app. The original proposal was a physical
            redesign of nutrition labels, a sticker translation system to make labels
            more scannable and visually clear. I explored five distinct label formats
            before user testing changed the direction entirely.
          </p>
          <div className="ng-evolution">
            <div className="ng-step">
              <div className="ng-step__num">01</div>
              <div className="ng-step__body">
                <div className="ng-step__title">Five Label Redesigns</div>
                <div className="ng-step__desc">Explored simplified tables, color-coded nutrient tiles, micronutrient grids, contextual tips ("Did you know?"), and whole food scores. Each tried to make the same data more legible.</div>
              </div>
            </div>
            <div className="ng-step">
              <div className="ng-step__num">02</div>
              <div className="ng-step__body">
                <div className="ng-step__title">The Pivot</div>
                <div className="ng-step__desc">Early user testing revealed the core problem: a cleaner label is still the wrong answer if it's answering the wrong question. The issue wasn't visual clarity; it was that the information wasn't personalized to the person reading it.</div>
              </div>
            </div>
            <div className="ng-step">
              <div className="ng-step__num">03</div>
              <div className="ng-step__body">
                <div className="ng-step__title">The App</div>
                <div className="ng-step__desc">The solution became a full mobile app: scan any label, get a score calibrated to your goals, allergies, and health profile. Ingredient breakdowns and better alternatives on demand.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">The Deliverables · Three Artifacts. One Goal.</h2>
          <p className="ng-text">Designed around real people with real goals.</p>
          <div className="ng-deliverables">
            <div className="ng-deliverable">
              <div className="ng-deliverable__num">01</div>
              <div className="ng-deliverable__title">Advertisement</div>
              <div className="ng-deliverable__role">The hook</div>
              <p className="ng-deliverable__desc">Introduces the concept to someone who's never heard of NutriGuide. The "same product, three scores" visual is the entire argument in a single glance.</p>
            </div>
            <div className="ng-deliverable">
              <div className="ng-deliverable__num">02</div>
              <div className="ng-deliverable__title">Redesigned Label</div>
              <div className="ng-deliverable__role">The touchpoint</div>
              <p className="ng-deliverable__desc">A physical label for small bakeries and homemade products, bridging analog food and a digital scoring system.</p>
            </div>
            <div className="ng-deliverable">
              <div className="ng-deliverable__num">03</div>
              <div className="ng-deliverable__title">Mobile App</div>
              <div className="ng-deliverable__role">The experience</div>
              <p className="ng-deliverable__desc">Full personalized score, allergy flags, ingredient breakdown, and better alternatives, built as a functional prototype.</p>
            </div>
          </div>
        </section>

        {/* ── Callout ── */}
        <section className="ng-section ng-section--callout">
          <p className="ng-callout-text">
            Same product.<br />Scored differently for every person.
          </p>
        </section>

        {/* ── Score Cards ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">The Insight · Visualized</h2>
          <p className="ng-text">
            The same granola bar. Three completely different scores, each one right.
            Helen (high blood pressure) gets a 12. James (weight loss) gets a 42.
            Aisha (active athlete) gets an 88.
          </p>
          <div className="ng-cards-demo">
            <ScoreCard
              initial="H" name="Helen" age={54} gender="Female" condition="High Blood Pressure"
              score={12} variant="bad"
              reasons={['High sugar content', 'Spikes blood sugar', 'Low fiber ratio']}
            />
            <ScoreCard
              initial="J" name="James" age={38} gender="Male" condition="Weight Loss"
              score={42} variant="mid"
              reasons={['Good protein', 'Calorie-dense snack', 'Added sugars present']}
            />
            <ScoreCard
              initial="A" name="Aisha" age={22} gender="Female" condition="Active Athlete"
              score={88} variant="good"
              reasons={['Good protein', 'Fast energy from carbs', 'Good calorie supply']}
            />
          </div>
        </section>

        {/* ── App Screens ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">The Designs · App Screens</h2>
          <p className="ng-text">
            The final design uses a dark green header for good matches and deep red for dietary
            conflicts, with color-coded progress bars per goal. The same product scores differently
            depending entirely on who is looking at it.
          </p>
          <div className="ng-screen-row">
            <img className="ng-screen" src="/nutriguide/ng-design-3.png" alt="NutriGuide goal onboarding" />
            <img className="ng-screen" src="/nutriguide/ng-design-7.png" alt="NutriGuide scan result good match" />
            <img className="ng-screen" src="/nutriguide/ng-design-14.png" alt="NutriGuide scan result conflict" />
          </div>
          <a
            className="ng-figma-link"
            href="https://www.figma.com/design/vH3zVIT4MqL3XtLNarN4yt/Design-Degree-Project--Copy-?node-id=0-1&t=7DnLrOUjO196CPzX-1"
            target="_blank"
            rel="noreferrer"
          >
            View full prototype in Figma →
          </a>
        </section>

        {/* ── App Features ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">The App · How It Works</h2>
          <p className="ng-text">
            Users set their health goals once during onboarding. Every scan after
            that is scored against their profile automatically, no re-entry,
            no manual lookup. The camera does the work.
          </p>
          <div className="ng-product-pillars">
            <div className="ng-pillar">
              <span className="ng-pillar-icon">◎</span>
              <div>
                <div className="ng-pillar-label">Goal Onboarding</div>
                <div className="ng-pillar-desc">High Protein · Low Calorie · Blood Sugar Balance · Low Sodium · Low Sugar · High Fiber · Clean Ingredients</div>
              </div>
            </div>
            <div className="ng-pillar">
              <span className="ng-pillar-icon">◎</span>
              <div>
                <div className="ng-pillar-label">Personalized Score</div>
                <div className="ng-pillar-desc">0–100 rating calibrated to your goals and health profile, color-coded for instant comprehension</div>
              </div>
            </div>
            <div className="ng-pillar">
              <span className="ng-pillar-icon">◎</span>
              <div>
                <div className="ng-pillar-label">Full Breakdown</div>
                <div className="ng-pillar-desc">Allergy flags, ingredient quality analysis, goal-aligned reasoning, and better alternatives</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Reflection ── */}
        <section className="ng-section">
          <h2 className="ng-section-heading">What I Learned</h2>
          <div className="ng-reflections">
            <div className="ng-reflection">
              <div className="ng-reflection__label">User Testing</div>
              <p className="ng-text">Early user testing revealed the central oversight in my initial designs. Cleaner labels weren't solving the problem because personalization was the missing piece, not visual polish. Testing changed the entire direction of the project.</p>
            </div>
            <div className="ng-reflection">
              <div className="ng-reflection__label">Nutrition Literacy</div>
              <p className="ng-text">Research showed the problem is far larger than anticipated. 72% of Americans can't confidently read a nutrition label. This isn't a niche issue; it's a systemic design failure that affects most people every time they grocery shop.</p>
            </div>
            <div className="ng-reflection">
              <div className="ng-reflection__label">Design Details</div>
              <p className="ng-text">Small decisions in typography, spacing, and contrast have an invaluable impact on how people perceive and process dense information. The difference between overwhelming and clear is often just hierarchy.</p>
            </div>
          </div>
        </section>

      </div>

      <div className="ng-back-row">
        <Link to="/" className="ng-back-link">← Back to Work</Link>
      </div>

    </div>
  );
}

export default NutriGuide;
