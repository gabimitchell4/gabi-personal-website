import React from "react";
import "../styles/Life.css";

function Life() {
  return (
    <div className="life-page">
      {/* Header */}
      <div className="life-header">
        <h1 className="life-heading">Outside of work</h1>
        <p className="life-intro">
          After graduating, I spent five months solo backpacking through
          Southeast Asia, exploring new places, meeting people, and learning to
          be comfortable with the unfamiliar. <br /> <br />
          When I’m not building things, you’ll usually find me practicing yoga,
          discovering a new café or restaurant, running, or finding my next
          adventure. I’m drawn to an active, healthy lifestyle and love
          experiencing new places through its food, people, and everyday
          moments.
        </p>
        <div className="life-photo life-photo--landscape">
          <img
            src={`${process.env.PUBLIC_URL}/life/ijen.jpeg`}
            alt="Ijen crater in Indonesia"
          />
        </div>
      </div>

      {/* SE Asia */}
      <div className="life-section">
        <p className="life-section-label">5 Months · Southeast Asia · Solo</p>

        <div className="life-travel-callout">
          <p className="life-travel-route">
            Thailand &nbsp;·&nbsp; Laos &nbsp;·&nbsp; Vietnam &nbsp;·&nbsp;
            Indonesia &nbsp;·&nbsp; Singapore
          </p>
          <p className="life-travel-desc">
            I left for Southeast Asia the week after graduation with a one-way
            ticket and no fixed plan. Five months, five countries, entirely
            solo. The anchor of the trip was Thailand, where I completed my
            200-hour yoga teacher training certification. The rest unfolded from
            there: slow boats through Laos, motorbikes in Vietnam, rice terraces
            in Bali, a final few days winding down in Singapore before flying
            home.
          </p>
          <p className="life-travel-desc">
            Traveling alone for that long changes how you think. You make every
            decision yourself, navigate everything in languages you don't speak,
            and get very comfortable being uncertain. It's the best thing I've
            ever done.
          </p>
        </div>

        {/* Hero photo grid */}
        <div className="life-grid-hero">
          <div className="life-photo life-photo--tall">
            <img
              src={`${process.env.PUBLIC_URL}/life/thailandview.png`}
              alt="Golden balloons at sunset, Thailand"
            />
          </div>
          <div className="life-grid-hero-col">
            <div
              className="life-photo life-photo--landscape"
              style={{ flex: 1 }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/life/bali-cliff.jpg`}
                alt="Gabi by the ocean in Bali"
              />
            </div>
            <div
              className="life-photo life-photo--landscape"
              style={{ flex: 1 }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/life/vietnam-ninh-binh.jpg`}
                alt="Mountain temple in Ninh Binh, Vietnam"
              />
            </div>
          </div>
        </div>

        {/* More travel photos */}
        <div className="life-grid-3" style={{ marginTop: 12 }}>
          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/indonesia-bromo.jpg`}
              alt="Mount Bromo in Indonesia"
            />
          </div>
          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/thailand-waterfall.jpg`}
              alt="Waterfall in Thailand"
            />
          </div>

          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/singapore-skyline.jpg`}
              alt="Singapore skyline at dusk"
            />
          </div>
          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/diving.JPG`}
              alt="Diving in Southeast Asia"
            />
          </div>
          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/hagiang.png`}
              alt="Ha Giang in Vietnam"
            />
          </div>
          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/khaosok.png`}
              alt="Khao Sok in Thailand"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="life-stats">
          <div className="life-stat">
            <span className="life-stat__val">142</span>
            <span className="life-stat__label">days traveled</span>
          </div>
          <div className="life-stat">
            <span className="life-stat__val">6</span>
            <span className="life-stat__label">countries</span>
          </div>
          <div className="life-stat">
            <span className="life-stat__val">34</span>
            <span className="life-stat__label">cities & destinations</span>
          </div>
          <div className="life-stat">
            <span className="life-stat__val">28</span>
            <span className="life-stat__label">days of yoga TTC</span>
          </div>
          <div className="life-stat">
            <span className="life-stat__val">25</span>
            <span className="life-stat__label">hostels</span>
          </div>
          <div className="life-stat">
            <span className="life-stat__val">14</span>
            <span className="life-stat__label">flights</span>
          </div>
          <div className="life-stat">
            <span className="life-stat__val">7</span>
            <span className="life-stat__label">dives</span>
          </div>
          <div className="life-stat">
            <span className="life-stat__val">7</span>
            <span className="life-stat__label">books read</span>
          </div>
          <div className="life-stat">
            <span className="life-stat__val">0</span>
            <span className="life-stat__label">food poisonings 🙏</span>
          </div>
        </div>

        {/* Country row */}
        <div className="life-country-row">
          <div className="life-country">
            <div className="life-country__name">Thailand</div>
            <div className="life-country__note">
              200-hr yoga teacher training
            </div>
          </div>
          <div className="life-country">
            <div className="life-country__name">Laos</div>
            <div className="life-country__note">Slow boats, no plans</div>
          </div>
          <div className="life-country">
            <div className="life-country__name">Vietnam</div>
            <div className="life-country__note">
              Explored Vietnam’s heights by motorbike
            </div>
          </div>
          <div className="life-country">
            <div className="life-country__name">Indonesia</div>
            <div className="life-country__note">Rice terraces in Bali</div>
          </div>
          <div className="life-country">
            <div className="life-country__name">Singapore</div>
            <div className="life-country__note">Last stop before home</div>
          </div>
          <div className="life-country">
            <div className="life-country__name">Israel</div>
            <div className="life-country__note">Home away from home</div>
          </div>
        </div>
      </div>

      {/* Food */}
      <div className="life-section">
        <p className="life-section-label">Food</p>

        <div className="life-grid-2" style={{ marginBottom: 12 }}>
          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/mango.png`}
              alt="Fresh mango"
            />
          </div>
          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/cooking.png`}
              alt="Cooking in Southeast Asia"
            />
          </div>
        </div>

        <p className="life-blurb">
          Food is how I experience places. Five months in Southeast Asia
          permanently recalibrated what I expect from a meal: the markets in
          Chiang Mai, bánh mì from a cart in Hội An, nasi goreng for breakfast in
          Bali. Back home I'm always hunting for the next great bowl of
          something.
        </p>
      </div>

      {/* Yoga */}
      <div className="life-section">
        <p className="life-section-label">Yoga</p>

        <div className="life-grid-3">
          <div
            className="life-photo life-photo--landscape"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/life/yoga-studio.jpg`}
              alt="Yoga studio overlooking rice fields"
            />
          </div>
          <div
            className="life-photo life-photo--landscape life-photo--headstand"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/life/headstand.png`}
              alt="Headstand yoga practice"
            />
          </div>
          <div className="life-photo life-photo--landscape">
            <img
              src={`${process.env.PUBLIC_URL}/life/graduation.png`}
              alt="Graduation day"
            />
          </div>
        </div>

        <p className="life-blurb">
          I'm a 200-hour certified yoga teacher. Yoga is where I slow down and
          actually pay attention to how I feel.
        </p>
      </div>
    </div>
  );
}

export default Life;
